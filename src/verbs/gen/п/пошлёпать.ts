import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пошлёпать: PerfectVerb = {
  name: Word('пошлёпать', 6),
  singular1stPerson: Word('пошлёпаю', 6),
  singular2ndPerson: Word('пошлёпаешь', 6),
  singular3rdPerson: Word('пошлёпает', 6),
  plural1stPerson: Word('пошлёпаем', 6),
  plural2ndPerson: Word('пошлёпаете', 6),
  plural3rdPerson: Word('пошлёпают', 6),
  masculinePast: Word('пошлёпал', 6),
  femininePast: Word('пошлёпала', 6),
  neuterPast: Word('пошлёпало', 6),
  pluralPast: Word('пошлёпали', 6),
  imperativeInformal: Word('пошлёпай', 6),
  imperativeFormal: Word('пошлёпайте', 6),
  imperfect: [],
};

perfectVerbs.set(пошлёпать.name.text, пошлёпать);

export { пошлёпать };