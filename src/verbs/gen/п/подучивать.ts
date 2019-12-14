import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подучивать: PerfectVerb = {
  name: Word('подучивать', 3),
  singular1stPerson: Word('подучиваю', 3),
  singular2ndPerson: Word('подучиваешь', 3),
  singular3rdPerson: Word('подучивает', 3),
  plural1stPerson: Word('подучиваем', 3),
  plural2ndPerson: Word('подучиваете', 3),
  plural3rdPerson: Word('подучивают', 3),
  masculinePast: Word('подучивал', 3),
  femininePast: Word('подучивала', 3),
  neuterPast: Word('подучивало', 3),
  pluralPast: Word('подучивали', 3),
  imperativeInformal: Word('подучивай', 3),
  imperativeFormal: Word('подучивайте', 3),
  imperfect: [],
};

perfectVerbs.set(подучивать.name.text, подучивать);

export { подучивать };