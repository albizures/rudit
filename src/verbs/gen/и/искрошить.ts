import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const искрошить: PerfectVerb = {
  name: Word('искрошить', 6),
  singular1stPerson: Word('искрошу', 6),
  singular2ndPerson: Word('искрошишь', 4),
  singular3rdPerson: Word('искрошит', 4),
  plural1stPerson: Word('искрошим', 4),
  plural2ndPerson: Word('искрошите', 4),
  plural3rdPerson: Word('искрошат', 4),
  masculinePast: Word('искрошил', 6),
  femininePast: Word('искрошила', 6),
  neuterPast: Word('искрошило', 6),
  pluralPast: Word('искрошили', 6),
  imperativeInformal: Word('искроши', 6),
  imperativeFormal: Word('искрошите', 6),
  imperfect: [],
};

perfectVerbs.set(искрошить.name.text, искрошить);

export { искрошить };