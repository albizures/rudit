import fs from 'fs';
import cheerio from 'cheerio';
import { getHtml, createQueries } from './utils';
import { escapeParam } from '../src/utils/strings';

const getAdjectiveUrl = escapeParam((name: string) => `https://cooljugator.com/rua/${name}`);
const getNounUrl = escapeParam((name: string) => `https://cooljugator.com/run/${name}`);

const getNoun = async (filename: string, name: string) => {
  const url = getNounUrl(name);
  const raw = await getHtml(url);
  const $ = cheerio.load(raw);
  const { getWord } = createQueries($);

  const fileContent = `import { Noun, Gender, PluralNoun } from '../utils/Noun';
import { Word } from '../utils/Word';
  
const plural: PluralNoun = {
  nominative: ${getWord('nom_P_no_accent')},
  genitive: ${getWord('gen_P_no_accent')},
  dative: ${getWord('dat_P_no_accent')},
  accusative: ${getWord('acc_P_no_accent')},
  instrumental: ${getWord('instr_P_no_accent')},
  prepositional: ${getWord('prep_P_no_accent')},
};

const ${name}: Noun = {
  gender: '',
  nominative: ${getWord('nom_P_no_accent')},
  genitive: ${getWord('gen_S_no_accent')},
  dative: ${getWord('dat_S_no_accent')},
  accusative: ${getWord('acc_S_no_accent')},
  instrumental: ${getWord('instr_S_no_accent')},
  prepositional: ${getWord('prep_S_no_accent')},
  pluralForm: plural,
};

plural.singularForm = ${name};

export { ${name} };`;

  await fs.promises.writeFile(`./src/nouns/${filename}-gen.ts`, fileContent);
};

const [, , name, noun] = process.argv;

if (!name || !noun) {
  throw new Error('missing name or noun');
}

getNoun(name, noun).then(console.log);
