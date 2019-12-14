import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переучивать: PerfectVerb = {
  name: Word('переучивать', 4),
  singular1stPerson: Word('переучиваю', 4),
  singular2ndPerson: Word('переучиваешь', 4),
  singular3rdPerson: Word('переучивает', 4),
  plural1stPerson: Word('переучиваем', 4),
  plural2ndPerson: Word('переучиваете', 4),
  plural3rdPerson: Word('переучивают', 4),
  masculinePast: Word('переучивал', 4),
  femininePast: Word('переучивала', 4),
  neuterPast: Word('переучивало', 4),
  pluralPast: Word('переучивали', 4),
  imperativeInformal: Word('переучивай', 4),
  imperativeFormal: Word('переучивайте', 4),
  imperfect: [],
};

perfectVerbs.set(переучивать.name.text, переучивать);

export { переучивать };