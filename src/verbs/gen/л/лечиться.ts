import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лечиться: PerfectVerb = {
  name: Word('лечиться', 3),
  singular1stPerson: Word('лечусь', 3),
  singular2ndPerson: Word('лечишься', 1),
  singular3rdPerson: Word('лечится', 1),
  plural1stPerson: Word('лечимся', 1),
  plural2ndPerson: Word('лечитесь', 1),
  plural3rdPerson: Word('лечатся', 1),
  masculinePast: Word('лечился', 3),
  femininePast: Word('лечилась', 3),
  neuterPast: Word('лечилось', 3),
  pluralPast: Word('лечились', 3),
  imperativeInformal: Word('лечись', 3),
  imperativeFormal: Word('лечитесь', 3),
  imperfect: [],
};

perfectVerbs.set(лечиться.name.text, лечиться);

export { лечиться };