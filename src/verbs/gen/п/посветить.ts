import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посветить: PerfectVerb = {
  name: Word('посветить', 6),
  singular1stPerson: Word('посвечу', 6),
  singular2ndPerson: Word('посветишь', 4),
  singular3rdPerson: Word('посветит', 4),
  plural1stPerson: Word('посветим', 4),
  plural2ndPerson: Word('посветите', 4),
  plural3rdPerson: Word('посветят', 4),
  masculinePast: Word('посветил', 6),
  femininePast: Word('посветила', 6),
  neuterPast: Word('посветило', 6),
  pluralPast: Word('посветили', 6),
  imperativeInformal: Word('посвети', 6),
  imperativeFormal: Word('посветите', 6),
  imperfect: [],
};

perfectVerbs.set(посветить.name.text, посветить);

export { посветить };