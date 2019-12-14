import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поладить: PerfectVerb = {
  name: Word('поладить', 3),
  singular1stPerson: Word('полажу', 3),
  singular2ndPerson: Word('поладишь', 3),
  singular3rdPerson: Word('поладит', 3),
  plural1stPerson: Word('поладим', 3),
  plural2ndPerson: Word('поладите', 3),
  plural3rdPerson: Word('поладят', 3),
  masculinePast: Word('поладил', 3),
  femininePast: Word('поладила', 3),
  neuterPast: Word('поладило', 3),
  pluralPast: Word('поладили', 3),
  imperativeInformal: Word('поладь', 3),
  imperativeFormal: Word('поладьте', 3),
  imperfect: [],
};

perfectVerbs.set(поладить.name.text, поладить);

export { поладить };