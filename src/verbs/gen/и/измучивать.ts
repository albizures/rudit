import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const измучивать: PerfectVerb = {
  name: Word('измучивать', 3),
  singular1stPerson: Word('измучиваю', 3),
  singular2ndPerson: Word('измучиваешь', 3),
  singular3rdPerson: Word('измучивает', 3),
  plural1stPerson: Word('измучиваем', 3),
  plural2ndPerson: Word('измучиваете', 3),
  plural3rdPerson: Word('измучивают', 3),
  masculinePast: Word('измучивал', 3),
  femininePast: Word('измучивала', 3),
  neuterPast: Word('измучивало', 3),
  pluralPast: Word('измучивали', 3),
  imperativeInformal: Word('измучивай', 3),
  imperativeFormal: Word('измучивайте', 3),
  imperfect: [],
};

perfectVerbs.set(измучивать.name.text, измучивать);

export { измучивать };