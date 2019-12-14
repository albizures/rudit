import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вылечиться: PerfectVerb = {
  name: Word('вылечиться', 1),
  singular1stPerson: Word('вылечусь', 1),
  singular2ndPerson: Word('вылечишься', 1),
  singular3rdPerson: Word('вылечится', 1),
  plural1stPerson: Word('вылечимся', 1),
  plural2ndPerson: Word('вылечитесь', 1),
  plural3rdPerson: Word('вылечатся', 1),
  masculinePast: Word('вылечился', 1),
  femininePast: Word('вылечилась', 1),
  neuterPast: Word('вылечилось', 1),
  pluralPast: Word('вылечились', 1),
  imperativeInformal: Word('вылечись', 1),
  imperativeFormal: Word('вылечитесь', 1),
  imperfect: [],
};

perfectVerbs.set(вылечиться.name.text, вылечиться);

export { вылечиться };