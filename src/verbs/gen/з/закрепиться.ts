import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закрепиться: PerfectVerb = {
  name: Word('закрепиться', 6),
  singular1stPerson: Word('закреплюсь', 7),
  singular2ndPerson: Word('закрепишься', 6),
  singular3rdPerson: Word('закрепится', 6),
  plural1stPerson: Word('закрепимся', 6),
  plural2ndPerson: Word('закрепитесь', 6),
  plural3rdPerson: Word('закрепятся', 6),
  masculinePast: Word('закрепился', 6),
  femininePast: Word('закрепилась', 6),
  neuterPast: Word('закрепилось', 6),
  pluralPast: Word('закрепились', 6),
  imperativeInformal: Word('закрепись', 6),
  imperativeFormal: Word('закрепитесь', 6),
  imperfect: [],
};

perfectVerbs.set(закрепиться.name.text, закрепиться);

export { закрепиться };