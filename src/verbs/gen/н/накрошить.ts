import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накрошить: PerfectVerb = {
  name: Word('накрошить', 6),
  singular1stPerson: Word('накрошу', 6),
  singular2ndPerson: Word('накрошишь', 4),
  singular3rdPerson: Word('накрошит', 4),
  plural1stPerson: Word('накрошим', 4),
  plural2ndPerson: Word('накрошите', 4),
  plural3rdPerson: Word('накрошат', 4),
  masculinePast: Word('накрошил', 6),
  femininePast: Word('накрошила', 6),
  neuterPast: Word('накрошило', 6),
  pluralPast: Word('накрошили', 6),
  imperativeInformal: Word('накроши', 6),
  imperativeFormal: Word('накрошите', 6),
  imperfect: [],
};

perfectVerbs.set(накрошить.name.text, накрошить);

export { накрошить };