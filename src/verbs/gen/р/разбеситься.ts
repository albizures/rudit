import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разбеситься: PerfectVerb = {
  name: Word('разбеситься', 6),
  singular1stPerson: Word('разбешусь', 6),
  singular2ndPerson: Word('разбесишься', 4),
  singular3rdPerson: Word('разбесится', 4),
  plural1stPerson: Word('разбесимся', 4),
  plural2ndPerson: Word('разбеситесь', 4),
  plural3rdPerson: Word('разбесятся', 4),
  masculinePast: Word('разбесился', 6),
  femininePast: Word('разбесилась', 6),
  neuterPast: Word('разбесилось', 6),
  pluralPast: Word('разбесились', 6),
  imperativeInformal: Word('разбесись', 6),
  imperativeFormal: Word('разбеситесь', 6),
  imperfect: [],
};

perfectVerbs.set(разбеситься.name.text, разбеситься);

export { разбеситься };