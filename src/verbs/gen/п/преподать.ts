import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const преподать: PerfectVerb = {
  name: Word('преподать', 6),
  singular1stPerson: Word('преподам', 6),
  singular2ndPerson: Word('преподашь', 6),
  singular3rdPerson: Word('преподаст', 6),
  plural1stPerson: Word('преподадим', 8),
  plural2ndPerson: Word('преподадите', 8),
  plural3rdPerson: Word('преподадут', 8),
  masculinePast: Word('преподал', 6),
  femininePast: Word('преподала', 8),
  neuterPast: Word('преподало,преподало'', 6),
  pluralPast: Word('преподали', 6),
  imperativeInformal: Word('преподай', 6),
  imperativeFormal: Word('преподайте', 6),
  imperfect: ['преподавать'],
};

perfectVerbs.set(преподать.name.text, преподать);

export { преподать };