import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затормошить: PerfectVerb = {
  name: Word('затормошить', 8),
  singular1stPerson: Word('затормошу', 8),
  singular2ndPerson: Word('затормошишь', 8),
  singular3rdPerson: Word('затормошит', 8),
  plural1stPerson: Word('затормошим', 8),
  plural2ndPerson: Word('затормошите', 8),
  plural3rdPerson: Word('затормошат', 8),
  masculinePast: Word('затормошил', 8),
  femininePast: Word('затормошила', 8),
  neuterPast: Word('затормошило', 8),
  pluralPast: Word('затормошили', 8),
  imperativeInformal: Word('затормоши', 8),
  imperativeFormal: Word('затормошите', 8),
  imperfect: [],
};

perfectVerbs.set(затормошить.name.text, затормошить);

export { затормошить };