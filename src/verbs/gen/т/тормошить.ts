import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тормошить: PerfectVerb = {
  name: Word('тормошить', 6),
  singular1stPerson: Word('тормошу', 6),
  singular2ndPerson: Word('тормошишь', 6),
  singular3rdPerson: Word('тормошит', 6),
  plural1stPerson: Word('тормошим', 6),
  plural2ndPerson: Word('тормошите', 6),
  plural3rdPerson: Word('тормошат', 6),
  masculinePast: Word('тормошил', 6),
  femininePast: Word('тормошила', 6),
  neuterPast: Word('тормошило', 6),
  pluralPast: Word('тормошили', 6),
  imperativeInformal: Word('тормоши', 6),
  imperativeFormal: Word('тормошите', 6),
  imperfect: [],
};

perfectVerbs.set(тормошить.name.text, тормошить);

export { тормошить };