import fs from 'fs';
import axios from 'axios';
import cheerio from 'cheerio';
import { escapeParam } from '../src/utils/strings';

const getVerbUrl = escapeParam((name: string) => `https://cooljugator.com/ru/${name}`);

const getHtml = async (url: string): Promise<string> => {
  const { data: raw } = await axios.get<string>(url);

  return raw;
};

const getStressIndex = (word: string): number => {
  const letters = word.split('');
  for (let index = 0; index < letters.length; index++) {
    const letter = letters[index];
    if (letter === '́') {
      // the stress add an extra position to the array of letters
      return index - 1;
    }

    if (letter === 'ё') {
      return index;
    }
  }

  return -1;
};

const getVerb = async (filename: string, name: string) => {
  const url = getVerbUrl(name);
  const raw = await getHtml(url);
  const $ = cheerio.load(raw);

  const getWord = (id: string): string => {
    const $word = $(id);

    const defaultValue = $word.data('default');
    const stressedValue = $word.data('stressed') || defaultValue;

    return `Word('${defaultValue}', ${getStressIndex(stressedValue)})`;
  };

  const fileContent = `import { Verb } from '../utils/Verb';
import { Word } from '../utils/Word';

const ${filename}: Verb = {
  name: '${name}',
  singular1stPerson: ${getWord('#present1')},
  singular2ndPerson: ${getWord('#present2')},
  singular3rdPerson: ${getWord('#present3')},
  plural1stPerson: ${getWord('#present4')},
  plural2ndPerson: ${getWord('#present5')},
  plural3rdPerson: ${getWord('#present6')},
  masculinePast: ${getWord('#past_singM')},
  femininePast: ${getWord('#past_singF')},
  neuterPast: ${getWord('#past_singN')},
  pluralPast: ${getWord('#past_plur')},
  imperativeInformal: ${getWord('#imperative2')},
  imperativeFormal: ${getWord('#imperative5')},
};

export { ${filename} };`;

  await fs.promises.writeFile(`./src/verbs/${filename}-gen.ts`, fileContent);
};

const [, , name, verb] = process.argv;

if (!name || !verb) {
  throw new Error('missing name or verb');
}

getVerb(name, verb).then(console.log);
