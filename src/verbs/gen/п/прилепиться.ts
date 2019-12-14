import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прилепиться: PerfectVerb = {
  name: Word('прилепиться', 6),
  singular1stPerson: Word('прилеплюсь', 7),
  singular2ndPerson: Word('прилепишься', 4),
  singular3rdPerson: Word('прилепится', 4),
  plural1stPerson: Word('прилепимся', 4),
  plural2ndPerson: Word('прилепитесь', 4),
  plural3rdPerson: Word('прилепятся', 4),
  masculinePast: Word('прилепился', 6),
  femininePast: Word('прилепилась', 6),
  neuterPast: Word('прилепилось', 6),
  pluralPast: Word('прилепились', 6),
  imperativeInformal: Word('прилепись', 6),
  imperativeFormal: Word('прилепитесь', 6),
  imperfect: [],
};

perfectVerbs.set(прилепиться.name.text, прилепиться);

export { прилепиться };