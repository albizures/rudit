import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пошлёпать: PerfectVerb = {
  name: Word('пошлёпать', 4),
  singular1stPerson: Word('пошлёпаю', 4),
  singular2ndPerson: Word('пошлёпаешь', 4),
  singular3rdPerson: Word('пошлёпает', 4),
  plural1stPerson: Word('пошлёпаем', 4),
  plural2ndPerson: Word('пошлёпаете', 4),
  plural3rdPerson: Word('пошлёпают', 4),
  masculinePast: Word('пошлёпал', 4),
  femininePast: Word('пошлёпала', 4),
  neuterPast: Word('пошлёпало', 4),
  pluralPast: Word('пошлёпали', 4),
  imperativeInformal: Word('пошлёпай', 4),
  imperativeFormal: Word('пошлёпайте', 4),
  imperfect: [],
};

perfectVerbs.set(пошлёпать.name.text, пошлёпать);

export { пошлёпать };