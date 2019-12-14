import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const беситься: PerfectVerb = {
  name: Word('беситься', 3),
  singular1stPerson: Word('бешусь', 3),
  singular2ndPerson: Word('бесишься', 1),
  singular3rdPerson: Word('бесится', 1),
  plural1stPerson: Word('бесимся', 1),
  plural2ndPerson: Word('беситесь', 1),
  plural3rdPerson: Word('бесятся', 1),
  masculinePast: Word('бесился', 3),
  femininePast: Word('бесилась', 3),
  neuterPast: Word('бесилось', 3),
  pluralPast: Word('бесились', 3),
  imperativeInformal: Word('бесись', 3),
  imperativeFormal: Word('беситесь', 3),
  imperfect: [],
};

perfectVerbs.set(беситься.name.text, беситься);

export { беситься };