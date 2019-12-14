import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сцепиться: PerfectVerb = {
  name: Word('сцепиться', 4),
  singular1stPerson: Word('сцеплюсь', 5),
  singular2ndPerson: Word('сцепишься', 2),
  singular3rdPerson: Word('сцепится', 2),
  plural1stPerson: Word('сцепимся', 2),
  plural2ndPerson: Word('сцепитесь', 2),
  plural3rdPerson: Word('сцепятся', 2),
  masculinePast: Word('сцепился', 4),
  femininePast: Word('сцепилась', 4),
  neuterPast: Word('сцепилось', 4),
  pluralPast: Word('сцепились', 4),
  imperativeInformal: Word('сцепись', 4),
  imperativeFormal: Word('сцепитесь', 4),
  imperfect: [],
};

perfectVerbs.set(сцепиться.name.text, сцепиться);

export { сцепиться };