import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переклеивать: PerfectVerb = {
  name: Word('переклеивать', 6),
  singular1stPerson: Word('переклеиваю', 6),
  singular2ndPerson: Word('переклеиваешь', 6),
  singular3rdPerson: Word('переклеивает', 6),
  plural1stPerson: Word('переклеиваем', 6),
  plural2ndPerson: Word('переклеиваете', 6),
  plural3rdPerson: Word('переклеивают', 6),
  masculinePast: Word('переклеивал', 6),
  femininePast: Word('переклеивала', 6),
  neuterPast: Word('переклеивало', 6),
  pluralPast: Word('переклеивали', 6),
  imperativeInformal: Word('переклеивай', 6),
  imperativeFormal: Word('переклеивайте', 6),
  imperfect: [],
};

perfectVerbs.set(переклеивать.name.text, переклеивать);

export { переклеивать };