import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зацепиться: PerfectVerb = {
  name: Word('зацепиться', 5),
  singular1stPerson: Word('зацеплюсь', 6),
  singular2ndPerson: Word('зацепишься', 3),
  singular3rdPerson: Word('зацепится', 3),
  plural1stPerson: Word('зацепимся', 3),
  plural2ndPerson: Word('зацепитесь', 3),
  plural3rdPerson: Word('зацепятся', 3),
  masculinePast: Word('зацепился', 5),
  femininePast: Word('зацепилась', 5),
  neuterPast: Word('зацепилось', 5),
  pluralPast: Word('зацепились', 5),
  imperativeInformal: Word('зацепись', 5),
  imperativeFormal: Word('зацепитесь', 5),
  imperfect: [],
};

perfectVerbs.set(зацепиться.name.text, зацепиться);

export { зацепиться };