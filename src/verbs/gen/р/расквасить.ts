import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расквасить: PerfectVerb = {
  name: Word('расквасить', 5),
  singular1stPerson: Word('расквашу', 5),
  singular2ndPerson: Word('расквасишь', 5),
  singular3rdPerson: Word('расквасит', 5),
  plural1stPerson: Word('расквасим', 5),
  plural2ndPerson: Word('расквасите', 5),
  plural3rdPerson: Word('расквасят', 5),
  masculinePast: Word('расквасил', 5),
  femininePast: Word('расквасила', 5),
  neuterPast: Word('расквасило', 5),
  pluralPast: Word('расквасили', 5),
  imperativeInformal: Word('расквась', 5),
  imperativeFormal: Word('расквасьте', 5),
  imperfect: [],
};

perfectVerbs.set(расквасить.name.text, расквасить);

export { расквасить };