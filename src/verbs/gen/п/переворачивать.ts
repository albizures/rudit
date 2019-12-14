import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переворачивать: PerfectVerb = {
  name: Word('переворачивать', 7),
  singular1stPerson: Word('переворачиваю', 7),
  singular2ndPerson: Word('переворачиваешь', 7),
  singular3rdPerson: Word('переворачивает', 7),
  plural1stPerson: Word('переворачиваем', 7),
  plural2ndPerson: Word('переворачиваете', 7),
  plural3rdPerson: Word('переворачивают', 7),
  masculinePast: Word('переворачивал', 7),
  femininePast: Word('переворачивала', 7),
  neuterPast: Word('переворачивало', 7),
  pluralPast: Word('переворачивали', 7),
  imperativeInformal: Word('переворачивай', 7),
  imperativeFormal: Word('переворачивайте', 7),
  imperfect: [],
};

perfectVerbs.set(переворачивать.name.text, переворачивать);

export { переворачивать };