import fs from 'fs';
import cheerio from 'cheerio';
import { escapeParam } from '../src/utils/strings';
import { getHtml, createQueries } from './utils';

const getVerbUrl = escapeParam((name: string) => `https://cooljugator.com/ru/${name}`);

const getVerb = async (filename: string, name: string) => {
  const url = getVerbUrl(name);
  const raw = await getHtml(url);
  const $ = cheerio.load(raw);
  const { getWord } = createQueries($);

  const fileContent = `import { Verb } from '../utils/Verb';
import { Word } from '../utils/Word';

const ${filename}: Verb = {
  name: '${name}',
  singular1stPerson: ${getWord('present1')},
  singular2ndPerson: ${getWord('present2')},
  singular3rdPerson: ${getWord('present3')},
  plural1stPerson: ${getWord('present4')},
  plural2ndPerson: ${getWord('present5')},
  plural3rdPerson: ${getWord('present6')},
  masculinePast: ${getWord('past_singM')},
  femininePast: ${getWord('past_singF')},
  neuterPast: ${getWord('past_singN')},
  pluralPast: ${getWord('past_plur')},
  imperativeInformal: ${getWord('imperative2')},
  imperativeFormal: ${getWord('imperative5')},
};

export { ${filename} };`;

  await fs.promises.writeFile(`./src/verbs/${filename}-gen.ts`, fileContent);
};

const [, , name, verb] = process.argv;

if (!name || !verb) {
  throw new Error('missing name or verb');
}

getVerb(name, verb).then(console.log);
