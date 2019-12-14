import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подкрепиться: PerfectVerb = {
  name: Word('подкрепиться', 7),
  singular1stPerson: Word('подкреплюсь', 8),
  singular2ndPerson: Word('подкрепишься', 7),
  singular3rdPerson: Word('подкрепится', 7),
  plural1stPerson: Word('подкрепимся', 7),
  plural2ndPerson: Word('подкрепитесь', 7),
  plural3rdPerson: Word('подкрепятся', 7),
  masculinePast: Word('подкрепился', 7),
  femininePast: Word('подкрепилась', 7),
  neuterPast: Word('подкрепилось', 7),
  pluralPast: Word('подкрепились', 7),
  imperativeInformal: Word('подкрепись', 7),
  imperativeFormal: Word('подкрепитесь', 7),
  imperfect: [],
};

perfectVerbs.set(подкрепиться.name.text, подкрепиться);

export { подкрепиться };