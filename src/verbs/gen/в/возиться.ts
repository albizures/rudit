import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возиться: PerfectVerb = {
  name: Word('возиться', 3),
  singular1stPerson: Word('вожусь', 3),
  singular2ndPerson: Word('возишься', 1),
  singular3rdPerson: Word('возится', 1),
  plural1stPerson: Word('возимся', 1),
  plural2ndPerson: Word('возитесь', 1),
  plural3rdPerson: Word('возятся', 1),
  masculinePast: Word('возился', 3),
  femininePast: Word('возилась', 3),
  neuterPast: Word('возилось', 3),
  pluralPast: Word('возились', 3),
  imperativeInformal: Word('возись', 3),
  imperativeFormal: Word('возитесь', 3),
  imperfect: [],
};

perfectVerbs.set(возиться.name.text, возиться);

export { возиться };