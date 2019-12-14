import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прошлёпать: PerfectVerb = {
  name: Word('прошлёпать', 5),
  singular1stPerson: Word('прошлёпаю', 5),
  singular2ndPerson: Word('прошлёпаешь', 5),
  singular3rdPerson: Word('прошлёпает', 5),
  plural1stPerson: Word('прошлёпаем', 5),
  plural2ndPerson: Word('прошлёпаете', 5),
  plural3rdPerson: Word('прошлёпают', 5),
  masculinePast: Word('прошлёпал', 5),
  femininePast: Word('прошлёпала', 5),
  neuterPast: Word('прошлёпало', 5),
  pluralPast: Word('прошлёпали', 5),
  imperativeInformal: Word('прошлёпай', 5),
  imperativeFormal: Word('прошлёпайте', 5),
  imperfect: [],
};

perfectVerbs.set(прошлёпать.name.text, прошлёпать);

export { прошлёпать };