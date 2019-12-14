import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вцепиться: PerfectVerb = {
  name: Word('вцепиться', 4),
  singular1stPerson: Word('вцеплюсь', 5),
  singular2ndPerson: Word('вцепишься', 2),
  singular3rdPerson: Word('вцепится', 2),
  plural1stPerson: Word('вцепимся', 2),
  plural2ndPerson: Word('вцепитесь', 2),
  plural3rdPerson: Word('вцепятся', 2),
  masculinePast: Word('вцепился', 4),
  femininePast: Word('вцепилась', 4),
  neuterPast: Word('вцепилось', 4),
  pluralPast: Word('вцепились', 4),
  imperativeInformal: Word('вцепись', 4),
  imperativeFormal: Word('вцепитесь', 4),
  imperfect: [],
};

perfectVerbs.set(вцепиться.name.text, вцепиться);

export { вцепиться };