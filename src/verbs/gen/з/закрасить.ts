import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закрасить: PerfectVerb = {
  name: Word('закрасить', 4),
  singular1stPerson: Word('закрашу', 4),
  singular2ndPerson: Word('закрасишь', 4),
  singular3rdPerson: Word('закрасит', 4),
  plural1stPerson: Word('закрасим', 4),
  plural2ndPerson: Word('закрасите', 4),
  plural3rdPerson: Word('закрасят', 4),
  masculinePast: Word('закрасил', 4),
  femininePast: Word('закрасила', 4),
  neuterPast: Word('закрасило', 4),
  pluralPast: Word('закрасили', 4),
  imperativeInformal: Word('закрась', 4),
  imperativeFormal: Word('закрасьте', 4),
  imperfect: [],
};

perfectVerbs.set(закрасить.name.text, закрасить);

export { закрасить };