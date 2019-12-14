import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const крепиться: PerfectVerb = {
  name: Word('крепиться', 4),
  singular1stPerson: Word('креплюсь', 5),
  singular2ndPerson: Word('крепишься', 4),
  singular3rdPerson: Word('крепится', 4),
  plural1stPerson: Word('крепимся', 4),
  plural2ndPerson: Word('крепитесь', 4),
  plural3rdPerson: Word('крепятся', 4),
  masculinePast: Word('крепился', 4),
  femininePast: Word('крепилась', 4),
  neuterPast: Word('крепилось', 4),
  pluralPast: Word('крепились', 4),
  imperativeInformal: Word('крепись', 4),
  imperativeFormal: Word('крепитесь', 4),
  imperfect: [],
};

perfectVerbs.set(крепиться.name.text, крепиться);

export { крепиться };