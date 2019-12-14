import fs from 'fs';
import { Verb, PerfectVerb } from '../src/utils/Verb';
import { Word } from '../src/utils/Word';
import verbs from '../converted.json';

enum Aspects {
  perfective = 'perfective',
  imperfective = 'imperfective',
}

interface RawVerb {
  bare: string;
  accented: string;
  translations_en: string;
  translations_de: string;
  aspect: string;
  partner: string;
  imperative_sg: string;
  imperative_pl: string;
  past_m: string;
  past_f: string;
  past_n: string;
  past_pl: string;
  presfut_sg1: string;
  presfut_sg2: string;
  presfut_sg3: string;
  presfut_pl1: string;
  presfut_pl2: string;
  presfut_pl3: string;
}

const stress = "'";
const stressAndVowels = [stress, 'а', 'е', 'ю', 'и', 'о', 'й', 'я', 'у', 'ё', 'э', 'ы'];

const getStress = (text: string): number => {
  for (const vowel of stressAndVowels) {
    const index = text.indexOf(vowel);

    if (index !== -1) {
      if (vowel === stress) {
        return index - 1;
      }

      return index;
    }
  }

  return -1;
};

const removeStress = (text: string) => text.replace(stress, '');

const createWord = (text: string): Word => ({
  text: removeStress(text),
  stress: getStress(text),
});

const createVerb = (raw: RawVerb): Verb => ({
  name: createWord(raw.accented),
  singular1stPerson: createWord(raw.presfut_sg1),
  singular2ndPerson: createWord(raw.presfut_sg2),
  singular3rdPerson: createWord(raw.presfut_sg3),
  plural1stPerson: createWord(raw.presfut_pl1),
  plural2ndPerson: createWord(raw.presfut_pl2),
  plural3rdPerson: createWord(raw.presfut_pl3),
  masculinePast: createWord(raw.past_m),
  femininePast: createWord(raw.past_f),
  pluralPast: createWord(raw.past_pl),
  neuterPast: createWord(raw.past_n),
  imperativeInformal: createWord(raw.imperative_sg),
  imperativeFormal: createWord(raw.imperative_pl),
  perfect: raw.partner.split(';').filter(Boolean),
});

const createPerfectVerb = (raw: RawVerb): PerfectVerb => ({
  name: createWord(raw.accented),
  singular1stPerson: createWord(raw.presfut_sg1),
  singular2ndPerson: createWord(raw.presfut_sg2),
  singular3rdPerson: createWord(raw.presfut_sg3),
  plural1stPerson: createWord(raw.presfut_pl1),
  plural2ndPerson: createWord(raw.presfut_pl2),
  plural3rdPerson: createWord(raw.presfut_pl3),
  masculinePast: createWord(raw.past_m),
  femininePast: createWord(raw.past_f),
  pluralPast: createWord(raw.past_pl),
  neuterPast: createWord(raw.past_n),
  imperativeInformal: createWord(raw.imperative_sg),
  imperativeFormal: createWord(raw.imperative_pl),
  imperfect: raw.partner.split(';').filter(Boolean),
});

const parseVerbs = () => {
  const imperfects = new Map<string, Verb>();
  const perfects = new Map<string, PerfectVerb>();

  (verbs as RawVerb[]).forEach((raw) => {
    if (raw.aspect === Aspects.imperfective) {
      const incompleted = createVerb(raw);
      imperfects.set(incompleted.name.text, incompleted);
    }

    const incompleted = createPerfectVerb(raw);
    perfects.set(incompleted.name.text, incompleted);
  });

  return {
    imperfects,
    perfects,
  };
};

const generatePerfectVerbFile = async (name: string, verb: PerfectVerb) => {
  const filename = `./src/verbs/gen/${name[0]}/${name}.ts`;
  const fileContent = `import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ${name}: PerfectVerb = {
  name: Word('${verb.name.text}', ${verb.name.stress}),
  singular1stPerson: Word('${verb.singular1stPerson.text}', ${verb.singular1stPerson.stress}),
  singular2ndPerson: Word('${verb.singular2ndPerson.text}', ${verb.singular2ndPerson.stress}),
  singular3rdPerson: Word('${verb.singular3rdPerson.text}', ${verb.singular3rdPerson.stress}),
  plural1stPerson: Word('${verb.plural1stPerson.text}', ${verb.plural1stPerson.stress}),
  plural2ndPerson: Word('${verb.plural2ndPerson.text}', ${verb.plural2ndPerson.stress}),
  plural3rdPerson: Word('${verb.plural3rdPerson.text}', ${verb.plural3rdPerson.stress}),
  masculinePast: Word('${verb.masculinePast.text}', ${verb.masculinePast.stress}),
  femininePast: Word('${verb.femininePast.text}', ${verb.femininePast.stress}),
  neuterPast: Word('${verb.neuterPast.text}', ${verb.neuterPast.stress}),
  pluralPast: Word('${verb.pluralPast.text}', ${verb.pluralPast.stress}),
  imperativeInformal: Word('${verb.imperativeInformal.text}', ${verb.imperativeInformal.stress}),
  imperativeFormal: Word('${verb.imperativeFormal.text}', ${verb.imperativeFormal.stress}),
  imperfect: [${verb.imperfect.map((i) => `'${i}'`)}],
};

perfectVerbs.set(${name}.name.text, ${name});

export { ${name} };`;

  await fs.promises.writeFile(filename, fileContent);
};

const generateVerbFile = async (name: string, verb: Verb) => {
  const filename = `./src/verbs/gen/${name[0]}/${name}.ts`;
  const fileContent = `import { Verb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { verbs } from '../../map';

const ${name}: Verb = {
  name: Word('${verb.name.text}', ${verb.name.stress}),
  singular1stPerson: Word('${verb.singular1stPerson.text}', ${verb.singular1stPerson.stress}),
  singular2ndPerson: Word('${verb.singular2ndPerson.text}', ${verb.singular2ndPerson.stress}),
  singular3rdPerson: Word('${verb.singular3rdPerson.text}', ${verb.singular3rdPerson.stress}),
  plural1stPerson: Word('${verb.plural1stPerson.text}', ${verb.plural1stPerson.stress}),
  plural2ndPerson: Word('${verb.plural2ndPerson.text}', ${verb.plural2ndPerson.stress}),
  plural3rdPerson: Word('${verb.plural3rdPerson.text}', ${verb.plural3rdPerson.stress}),
  masculinePast: Word('${verb.masculinePast.text}', ${verb.masculinePast.stress}),
  femininePast: Word('${verb.femininePast.text}', ${verb.femininePast.stress}),
  neuterPast: Word('${verb.neuterPast.text}', ${verb.neuterPast.stress}),
  pluralPast: Word('${verb.pluralPast.text}', ${verb.pluralPast.stress}),
  imperativeInformal: Word('${verb.imperativeInformal.text}', ${verb.imperativeInformal.stress}),
  imperativeFormal: Word('${verb.imperativeFormal.text}', ${verb.imperativeFormal.stress}),
  perfect: [${verb.perfect.map((p) => `'${p}'`)}],
};

verbs.set(${name}.name.text, ${name});

export { ${name} };`;

  await fs.promises.writeFile(filename, fileContent);
};

interface ImportsByLetter {
  [key: string]: string[];
}

const generateFiles = async () => {
  const { imperfects, perfects } = parseVerbs();
  const importsByLetter: ImportsByLetter = {};

  for (const [name, verb] of imperfects) {
    const letter = name[0];

    if (!importsByLetter[letter]) {
      importsByLetter[letter] = [];
      await fs.promises.mkdir(`./src/verbs/gen/${name[0]}`);
    }

    importsByLetter[letter].push(`export * from './${name}.ts;'\n`);

    await generateVerbFile(name, verb);
  }

  for (const [name, verb] of perfects) {
    const letter = name[0];
    if (!importsByLetter[letter]) {
      importsByLetter[letter] = [];
      await fs.promises.mkdir(`./src/verbs/gen/${name[0]}`);
    }
    importsByLetter[letter].push(`export * from './${name}.ts;'\n`);
    await generatePerfectVerbFile(name, verb);
  }

  const letters = Object.keys(importsByLetter);

  await Promise.all(
    letters.map(async (letter) => {
      const imports = importsByLetter[letter];
      const filename = `./src/verbs/gen/${letter}/index.ts`;

      await fs.promises.writeFile(filename, imports.join(''));
    }),
  );

  const content = letters.map((letter) => {
    return `export * from './src/verbs/gen/${letter}/index.ts'\n`;
  });

  await fs.promises.writeFile('./src/verbs/gen/index.ts', content.join(''));
};

generateFiles();
