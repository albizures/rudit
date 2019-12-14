import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const укрепиться: PerfectVerb = {
  name: Word('укрепиться', 5),
  singular1stPerson: Word('укреплюсь', 6),
  singular2ndPerson: Word('укрепишься', 5),
  singular3rdPerson: Word('укрепится', 5),
  plural1stPerson: Word('укрепимся', 5),
  plural2ndPerson: Word('укрепитесь', 5),
  plural3rdPerson: Word('укрепятся', 5),
  masculinePast: Word('укрепился', 5),
  femininePast: Word('укрепилась', 5),
  neuterPast: Word('укрепилось', 5),
  pluralPast: Word('укрепились', 5),
  imperativeInformal: Word('укрепись', 5),
  imperativeFormal: Word('укрепитесь', 5),
  imperfect: [],
};

perfectVerbs.set(укрепиться.name.text, укрепиться);

export { укрепиться };