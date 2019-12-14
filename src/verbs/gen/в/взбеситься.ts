import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взбеситься: PerfectVerb = {
  name: Word('взбеситься', 5),
  singular1stPerson: Word('взбешусь', 5),
  singular2ndPerson: Word('взбесишься', 3),
  singular3rdPerson: Word('взбесится', 3),
  plural1stPerson: Word('взбесимся', 3),
  plural2ndPerson: Word('взбеситесь', 3),
  plural3rdPerson: Word('взбесятся', 3),
  masculinePast: Word('взбесился', 5),
  femininePast: Word('взбесилась', 5),
  neuterPast: Word('взбесилось', 5),
  pluralPast: Word('взбесились', 5),
  imperativeInformal: Word('взбесись', 5),
  imperativeFormal: Word('взбеситесь', 5),
  imperfect: [],
};

perfectVerbs.set(взбеситься.name.text, взбеситься);

export { взбеситься };