import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отбеситься: PerfectVerb = {
  name: Word('отбеситься', 5),
  singular1stPerson: Word('отбешусь', 5),
  singular2ndPerson: Word('отбесишься', 3),
  singular3rdPerson: Word('отбесится', 3),
  plural1stPerson: Word('отбесимся', 3),
  plural2ndPerson: Word('отбеситесь', 3),
  plural3rdPerson: Word('отбесятся', 3),
  masculinePast: Word('отбесился', 5),
  femininePast: Word('отбесилась', 5),
  neuterPast: Word('отбесилось', 5),
  pluralPast: Word('отбесились', 5),
  imperativeInformal: Word('отбесись', 5),
  imperativeFormal: Word('отбеситесь', 5),
  imperfect: [],
};

perfectVerbs.set(отбеситься.name.text, отбеситься);

export { отбеситься };