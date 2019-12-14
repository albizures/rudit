import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покачнуться: PerfectVerb = {
  name: Word('покачнуться', 6),
  singular1stPerson: Word('покачнусь', 6),
  singular2ndPerson: Word('покачнёшься', 3),
  singular3rdPerson: Word('покачнётся', 3),
  plural1stPerson: Word('покачнёмся', 3),
  plural2ndPerson: Word('покачнётесь', 3),
  plural3rdPerson: Word('покачнутся', 6),
  masculinePast: Word('покачнулся', 6),
  femininePast: Word('покачнулась', 6),
  neuterPast: Word('покачнулось', 6),
  pluralPast: Word('покачнулись', 6),
  imperativeInformal: Word('покачнись', 6),
  imperativeFormal: Word('покачнитесь', 6),
  imperfect: [],
};

perfectVerbs.set(покачнуться.name.text, покачнуться);

export { покачнуться };