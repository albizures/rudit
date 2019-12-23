import { getConnection } from '../src/utils/db';
import verbs from '../converted.json';
import { Word } from '../src/entities/word';
import { ImperfectVerb, PerfectVerb } from '../src/entities/verb';

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
const stressAndVowels = [stress, 'ё', 'а', 'е', 'ю', 'и', 'о', 'й', 'я', 'у', 'э', 'ы'];

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

const removeStress = (text: string) => text.replace(stress, '').replace(stress, '');

const createWord = async (raw: string): Promise<Word> => {
  const connection = await getConnection();
  const repository = connection.getRepository(Word);
  const text = raw.split('//')[0].split(',')[0];
  const word = new Word();

  word.text = removeStress(text);
  word.stress = getStress(text);

  await repository.save(word);

  return word;
};

interface ReturnCreateImperfectVerb {
  verb: ImperfectVerb;
  name: string;
  partners: string[];
}

const createImperfectVerb = async (raw: RawVerb): Promise<ReturnCreateImperfectVerb> => {
  const connection = await getConnection();
  const repository = connection.getRepository(ImperfectVerb);
  const verb = new ImperfectVerb();

  verb.name = await createWord(raw.accented);
  verb.singular1stPerson = await createWord(raw.presfut_sg1);
  verb.singular2ndPerson = await createWord(raw.presfut_sg2);
  verb.singular3rdPerson = await createWord(raw.presfut_sg3);
  verb.plural1stPerson = await createWord(raw.presfut_pl1);
  verb.plural2ndPerson = await createWord(raw.presfut_pl2);
  verb.plural3rdPerson = await createWord(raw.presfut_pl3);
  verb.masculinePast = await createWord(raw.past_m);
  verb.femininePast = await createWord(raw.past_f);
  verb.pluralPast = await createWord(raw.past_pl);
  verb.neuterPast = await createWord(raw.past_n);
  verb.imperativeInformal = await createWord(raw.imperative_sg);
  verb.imperativeFormal = await createWord(raw.imperative_pl);
  verb.perfects = [];

  await repository.save(verb);

  return {
    verb,
    name: raw.bare,
    partners: raw.partner.split(';').filter(Boolean),
  };
};

interface ReturnCreatePerfectVerb {
  verb: PerfectVerb;
  name: string;
  partners: string[];
}

const createPerfectVerb = async (raw: RawVerb): Promise<ReturnCreatePerfectVerb> => {
  const connection = await getConnection();
  const repository = connection.getRepository(PerfectVerb);
  const verb = new PerfectVerb();

  verb.name = await createWord(raw.accented);
  verb.singular1stPerson = await createWord(raw.presfut_sg1);
  verb.singular2ndPerson = await createWord(raw.presfut_sg2);
  verb.singular3rdPerson = await createWord(raw.presfut_sg3);
  verb.plural1stPerson = await createWord(raw.presfut_pl1);
  verb.plural2ndPerson = await createWord(raw.presfut_pl2);
  verb.plural3rdPerson = await createWord(raw.presfut_pl3);
  verb.masculinePast = await createWord(raw.past_m);
  verb.femininePast = await createWord(raw.past_f);
  verb.pluralPast = await createWord(raw.past_pl);
  verb.neuterPast = await createWord(raw.past_n);
  verb.imperativeInformal = await createWord(raw.imperative_sg);
  verb.imperativeFormal = await createWord(raw.imperative_pl);
  verb.imperfects = [];

  await repository.save(verb);

  return {
    verb,
    name: raw.bare,
    partners: raw.partner.split(';').filter(Boolean),
  };
};

const parseVerbs = async () => {
  const imperfects = new Map<string, ReturnCreateImperfectVerb>();
  const perfects = new Map<string, ReturnCreatePerfectVerb>();
  const connection = await getConnection();
  const perfectRepository = connection.getRepository(PerfectVerb);
  const imperfectRepository = connection.getRepository(ImperfectVerb);

  await Promise.all(
    (verbs as RawVerb[]).map(async (raw) => {
      if (raw.aspect === Aspects.imperfective) {
        const result = await createImperfectVerb(raw);
        imperfects.set(result.name, result);
      } else {
        const result = await createPerfectVerb(raw);
        perfects.set(result.name, result);
      }
    }),
  );

  for (const [, { partners, verb }] of imperfects) {
    for (const partner of partners) {
      if (perfects.has(partner)) {
        verb.perfects.push(perfects.get(partner).verb);
      }
    }
    await imperfectRepository.save(verb);
  }

  for (const [, { partners, verb }] of perfects) {
    for (const partner of partners) {
      if (imperfects.has(partner)) {
        verb.imperfects.push(imperfects.get(partner).verb);
      }
    }
    await perfectRepository.save(verb);
  }
};

parseVerbs()
  .catch(console.log)
  .then(() => {
    console.log('entds');
  });
