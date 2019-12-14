import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const побеситься: PerfectVerb = {
  name: Word('побеситься', 5),
  singular1stPerson: Word('побешусь', 5),
  singular2ndPerson: Word('побесишься', 3),
  singular3rdPerson: Word('побесится', 3),
  plural1stPerson: Word('побесимся', 3),
  plural2ndPerson: Word('побеситесь', 3),
  plural3rdPerson: Word('побесятся', 3),
  masculinePast: Word('побесился', 5),
  femininePast: Word('побесилась', 5),
  neuterPast: Word('побесилось', 5),
  pluralPast: Word('побесились', 5),
  imperativeInformal: Word('побесись', 5),
  imperativeFormal: Word('побеситесь', 5),
  imperfect: [],
};

perfectVerbs.set(побеситься.name.text, побеситься);

export { побеситься };