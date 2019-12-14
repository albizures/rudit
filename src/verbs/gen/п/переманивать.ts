import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переманивать: PerfectVerb = {
  name: Word('переманивать', 5),
  singular1stPerson: Word('переманиваю', 5),
  singular2ndPerson: Word('переманиваешь', 5),
  singular3rdPerson: Word('переманивает', 5),
  plural1stPerson: Word('переманиваем', 5),
  plural2ndPerson: Word('переманиваете', 5),
  plural3rdPerson: Word('переманивают', 5),
  masculinePast: Word('переманивал', 5),
  femininePast: Word('переманивала', 5),
  neuterPast: Word('переманивало', 5),
  pluralPast: Word('переманивали', 5),
  imperativeInformal: Word('переманивай', 5),
  imperativeFormal: Word('переманивайте', 5),
  imperfect: [],
};

perfectVerbs.set(переманивать.name.text, переманивать);

export { переманивать };