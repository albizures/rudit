import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вымучивать: PerfectVerb = {
  name: Word('вымучивать', 3),
  singular1stPerson: Word('вымучиваю', 3),
  singular2ndPerson: Word('вымучиваешь', 3),
  singular3rdPerson: Word('вымучивает', 3),
  plural1stPerson: Word('вымучиваем', 3),
  plural2ndPerson: Word('вымучиваете', 3),
  plural3rdPerson: Word('вымучивают', 3),
  masculinePast: Word('вымучивал', 3),
  femininePast: Word('вымучивала', 3),
  neuterPast: Word('вымучивало', 3),
  pluralPast: Word('вымучивали', 3),
  imperativeInformal: Word('вымучивай', 3),
  imperativeFormal: Word('вымучивайте', 3),
  imperfect: [],
};

perfectVerbs.set(вымучивать.name.text, вымучивать);

export { вымучивать };