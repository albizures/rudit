import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накрасить: PerfectVerb = {
  name: Word('накрасить', 4),
  singular1stPerson: Word('накрашу', 4),
  singular2ndPerson: Word('накрасишь', 4),
  singular3rdPerson: Word('накрасит', 4),
  plural1stPerson: Word('накрасим', 4),
  plural2ndPerson: Word('накрасите', 4),
  plural3rdPerson: Word('накрасят', 4),
  masculinePast: Word('накрасил', 4),
  femininePast: Word('накрасила', 4),
  neuterPast: Word('накрасило', 4),
  pluralPast: Word('накрасили', 4),
  imperativeInformal: Word('накрась', 4),
  imperativeFormal: Word('накрасьте', 4),
  imperfect: [],
};

perfectVerbs.set(накрасить.name.text, накрасить);

export { накрасить };