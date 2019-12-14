import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прицепиться: PerfectVerb = {
  name: Word('прицепиться', 6),
  singular1stPerson: Word('прицеплюсь', 7),
  singular2ndPerson: Word('прицепишься', 4),
  singular3rdPerson: Word('прицепится', 4),
  plural1stPerson: Word('прицепимся', 4),
  plural2ndPerson: Word('прицепитесь', 4),
  plural3rdPerson: Word('прицепятся', 4),
  masculinePast: Word('прицепился', 6),
  femininePast: Word('прицепилась', 6),
  neuterPast: Word('прицепилось', 6),
  pluralPast: Word('прицепились', 6),
  imperativeInformal: Word('прицепись', 6),
  imperativeFormal: Word('прицепитесь', 6),
  imperfect: [],
};

perfectVerbs.set(прицепиться.name.text, прицепиться);

export { прицепиться };