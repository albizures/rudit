import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покрасить: PerfectVerb = {
  name: Word('покрасить', 4),
  singular1stPerson: Word('покрашу', 4),
  singular2ndPerson: Word('покрасишь', 4),
  singular3rdPerson: Word('покрасит', 4),
  plural1stPerson: Word('покрасим', 4),
  plural2ndPerson: Word('покрасите', 4),
  plural3rdPerson: Word('покрасят', 4),
  masculinePast: Word('покрасил', 4),
  femininePast: Word('покрасила', 4),
  neuterPast: Word('покрасило', 4),
  pluralPast: Word('покрасили', 4),
  imperativeInformal: Word('покрась', 4),
  imperativeFormal: Word('покрасьте', 4),
  imperfect: [],
};

perfectVerbs.set(покрасить.name.text, покрасить);

export { покрасить };