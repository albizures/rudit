import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const преподавать: PerfectVerb = {
  name: Word('преподавать', 8),
  singular1stPerson: Word('преподаю', 7),
  singular2ndPerson: Word('преподаёшь', 6),
  singular3rdPerson: Word('преподаёт', 6),
  plural1stPerson: Word('преподаём', 6),
  plural2ndPerson: Word('преподаёте', 6),
  plural3rdPerson: Word('преподают', 7),
  masculinePast: Word('преподавал', 8),
  femininePast: Word('преподавала', 8),
  neuterPast: Word('преподавало', 8),
  pluralPast: Word('преподавали', 8),
  imperativeInformal: Word('преподавай', 8),
  imperativeFormal: Word('преподавайте', 8),
  imperfect: ['преподать'],
};

perfectVerbs.set(преподавать.name.text, преподавать);

export { преподавать };