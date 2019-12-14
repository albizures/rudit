import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разучивать: PerfectVerb = {
  name: Word('разучивать', 3),
  singular1stPerson: Word('разучиваю', 3),
  singular2ndPerson: Word('разучиваешь', 3),
  singular3rdPerson: Word('разучивает', 3),
  plural1stPerson: Word('разучиваем', 3),
  plural2ndPerson: Word('разучиваете', 3),
  plural3rdPerson: Word('разучивают', 3),
  masculinePast: Word('разучивал', 3),
  femininePast: Word('разучивала', 3),
  neuterPast: Word('разучивало', 3),
  pluralPast: Word('разучивали', 3),
  imperativeInformal: Word('разучивай', 3),
  imperativeFormal: Word('разучивайте', 3),
  imperfect: [],
};

perfectVerbs.set(разучивать.name.text, разучивать);

export { разучивать };