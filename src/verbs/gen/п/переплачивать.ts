import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переплачивать: PerfectVerb = {
  name: Word('переплачивать', 6),
  singular1stPerson: Word('переплачиваю', 6),
  singular2ndPerson: Word('переплачиваешь', 6),
  singular3rdPerson: Word('переплачивает', 6),
  plural1stPerson: Word('переплачиваем', 6),
  plural2ndPerson: Word('переплачиваете', 6),
  plural3rdPerson: Word('переплачивают', 6),
  masculinePast: Word('переплачивал', 6),
  femininePast: Word('переплачивала', 6),
  neuterPast: Word('переплачивало', 6),
  pluralPast: Word('переплачивали', 6),
  imperativeInformal: Word('переплачивай', 6),
  imperativeFormal: Word('переплачивайте', 6),
  imperfect: [],
};

perfectVerbs.set(переплачивать.name.text, переплачивать);

export { переплачивать };