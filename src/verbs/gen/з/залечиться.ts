import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const залечиться: PerfectVerb = {
  name: Word('залечиться', 5),
  singular1stPerson: Word('залечусь', 5),
  singular2ndPerson: Word('залечишься', 3),
  singular3rdPerson: Word('залечится', 3),
  plural1stPerson: Word('залечимся', 3),
  plural2ndPerson: Word('залечитесь', 3),
  plural3rdPerson: Word('залечатся', 3),
  masculinePast: Word('залечился', 5),
  femininePast: Word('залечилась', 5),
  neuterPast: Word('залечилось', 5),
  pluralPast: Word('залечились', 5),
  imperativeInformal: Word('залечись', 5),
  imperativeFormal: Word('залечитесь', 5),
  imperfect: [],
};

perfectVerbs.set(залечиться.name.text, залечиться);

export { залечиться };