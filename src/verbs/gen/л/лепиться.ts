import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лепиться: PerfectVerb = {
  name: Word('лепиться', 3),
  singular1stPerson: Word('леплюсь', 4),
  singular2ndPerson: Word('лепишься', 1),
  singular3rdPerson: Word('лепится', 1),
  plural1stPerson: Word('лепимся', 1),
  plural2ndPerson: Word('лепитесь', 1),
  plural3rdPerson: Word('лепятся', 1),
  masculinePast: Word('лепился', 3),
  femininePast: Word('лепилась', 3),
  neuterPast: Word('лепилось', 3),
  pluralPast: Word('лепились', 3),
  imperativeInformal: Word('лепись', 3),
  imperativeFormal: Word('лепитесь', 3),
  imperfect: [],
};

perfectVerbs.set(лепиться.name.text, лепиться);

export { лепиться };