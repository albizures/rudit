import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обесцветить: PerfectVerb = {
  name: Word('обесцветить', 6),
  singular1stPerson: Word('обесцвечу', 6),
  singular2ndPerson: Word('обесцветишь', 6),
  singular3rdPerson: Word('обесцветит', 6),
  plural1stPerson: Word('обесцветим', 6),
  plural2ndPerson: Word('обесцветите', 6),
  plural3rdPerson: Word('обесцветят', 6),
  masculinePast: Word('обесцветил', 6),
  femininePast: Word('обесцветила', 6),
  neuterPast: Word('обесцветило', 6),
  pluralPast: Word('обесцветили', 6),
  imperativeInformal: Word('обесцветь', 6),
  imperativeFormal: Word('обесцветьте', 6),
  imperfect: [],
};

perfectVerbs.set(обесцветить.name.text, обесцветить);

export { обесцветить };