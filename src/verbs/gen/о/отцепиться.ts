import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отцепиться: PerfectVerb = {
  name: Word('отцепиться', 5),
  singular1stPerson: Word('отцеплюсь', 6),
  singular2ndPerson: Word('отцепишься', 3),
  singular3rdPerson: Word('отцепится', 3),
  plural1stPerson: Word('отцепимся', 3),
  plural2ndPerson: Word('отцепитесь', 3),
  plural3rdPerson: Word('отцепятся', 3),
  masculinePast: Word('отцепился', 5),
  femininePast: Word('отцепилась', 5),
  neuterPast: Word('отцепилось', 5),
  pluralPast: Word('отцепились', 5),
  imperativeInformal: Word('отцепись', 5),
  imperativeFormal: Word('отцепитесь', 5),
  imperfect: [],
};

perfectVerbs.set(отцепиться.name.text, отцепиться);

export { отцепиться };