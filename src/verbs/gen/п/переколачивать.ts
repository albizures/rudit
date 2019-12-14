import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переколачивать: PerfectVerb = {
  name: Word('переколачивать', 7),
  singular1stPerson: Word('переколачиваю', 7),
  singular2ndPerson: Word('переколачиваешь', 7),
  singular3rdPerson: Word('переколачивает', 7),
  plural1stPerson: Word('переколачиваем', 7),
  plural2ndPerson: Word('переколачиваете', 7),
  plural3rdPerson: Word('переколачивают', 7),
  masculinePast: Word('переколачивал', 7),
  femininePast: Word('переколачивала', 7),
  neuterPast: Word('переколачивало', 7),
  pluralPast: Word('переколачивали', 7),
  imperativeInformal: Word('переколачивай', 7),
  imperativeFormal: Word('переколачивайте', 7),
  imperfect: [],
};

perfectVerbs.set(переколачивать.name.text, переколачивать);

export { переколачивать };