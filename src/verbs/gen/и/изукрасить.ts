import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изукрасить: PerfectVerb = {
  name: Word('изукрасить', 5),
  singular1stPerson: Word('изукрашу', 5),
  singular2ndPerson: Word('изукрасишь', 5),
  singular3rdPerson: Word('изукрасит', 5),
  plural1stPerson: Word('изукрасим', 5),
  plural2ndPerson: Word('изукрасите', 5),
  plural3rdPerson: Word('изукрасят', 5),
  masculinePast: Word('изукрасил', 5),
  femininePast: Word('изукрасила', 5),
  neuterPast: Word('изукрасило', 5),
  pluralPast: Word('изукрасили', 5),
  imperativeInformal: Word('изукрась', 5),
  imperativeFormal: Word('изукрасьте', 5),
  imperfect: [],
};

perfectVerbs.set(изукрасить.name.text, изукрасить);

export { изукрасить };