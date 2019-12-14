import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переиначивать: PerfectVerb = {
  name: Word('переиначивать', 6),
  singular1stPerson: Word('переиначиваю', 6),
  singular2ndPerson: Word('переиначиваешь', 6),
  singular3rdPerson: Word('переиначивает', 6),
  plural1stPerson: Word('переиначиваем', 6),
  plural2ndPerson: Word('переиначиваете', 6),
  plural3rdPerson: Word('переиначивают', 6),
  masculinePast: Word('переиначивал', 6),
  femininePast: Word('переиначивала', 6),
  neuterPast: Word('переиначивало', 6),
  pluralPast: Word('переиначивали', 6),
  imperativeInformal: Word('переиначивай', 6),
  imperativeFormal: Word('переиначивайте', 6),
  imperfect: [],
};

perfectVerbs.set(переиначивать.name.text, переиначивать);

export { переиначивать };