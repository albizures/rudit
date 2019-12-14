import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прошлёпать: PerfectVerb = {
  name: Word('прошлёпать', 7),
  singular1stPerson: Word('прошлёпаю', 7),
  singular2ndPerson: Word('прошлёпаешь', 7),
  singular3rdPerson: Word('прошлёпает', 7),
  plural1stPerson: Word('прошлёпаем', 7),
  plural2ndPerson: Word('прошлёпаете', 7),
  plural3rdPerson: Word('прошлёпают', 7),
  masculinePast: Word('прошлёпал', 7),
  femininePast: Word('прошлёпала', 7),
  neuterPast: Word('прошлёпало', 7),
  pluralPast: Word('прошлёпали', 7),
  imperativeInformal: Word('прошлёпай', 7),
  imperativeFormal: Word('прошлёпайте', 7),
  imperfect: [],
};

perfectVerbs.set(прошлёпать.name.text, прошлёпать);

export { прошлёпать };