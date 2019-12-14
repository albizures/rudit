import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вышучивать: PerfectVerb = {
  name: Word('вышучивать', 3),
  singular1stPerson: Word('вышучиваю', 3),
  singular2ndPerson: Word('вышучиваешь', 3),
  singular3rdPerson: Word('вышучивает', 3),
  plural1stPerson: Word('вышучиваем', 3),
  plural2ndPerson: Word('вышучиваете', 3),
  plural3rdPerson: Word('вышучивают', 3),
  masculinePast: Word('вышучивал', 3),
  femininePast: Word('вышучивала', 3),
  neuterPast: Word('вышучивало', 3),
  pluralPast: Word('вышучивали', 3),
  imperativeInformal: Word('вышучивай', 3),
  imperativeFormal: Word('вышучивайте', 3),
  imperfect: [],
};

perfectVerbs.set(вышучивать.name.text, вышучивать);

export { вышучивать };