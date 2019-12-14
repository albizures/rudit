import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подшучивать: PerfectVerb = {
  name: Word('подшучивать', 4),
  singular1stPerson: Word('подшучиваю', 4),
  singular2ndPerson: Word('подшучиваешь', 4),
  singular3rdPerson: Word('подшучивает', 4),
  plural1stPerson: Word('подшучиваем', 4),
  plural2ndPerson: Word('подшучиваете', 4),
  plural3rdPerson: Word('подшучивают', 4),
  masculinePast: Word('подшучивал', 4),
  femininePast: Word('подшучивала', 4),
  neuterPast: Word('подшучивало', 4),
  pluralPast: Word('подшучивали', 4),
  imperativeInformal: Word('подшучивай', 4),
  imperativeFormal: Word('подшучивайте', 4),
  imperfect: [],
};

perfectVerbs.set(подшучивать.name.text, подшучивать);

export { подшучивать };