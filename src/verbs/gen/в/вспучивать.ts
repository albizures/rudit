import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вспучивать: PerfectVerb = {
  name: Word('вспучивать', 3),
  singular1stPerson: Word('вспучиваю', 3),
  singular2ndPerson: Word('вспучиваешь', 3),
  singular3rdPerson: Word('вспучивает', 3),
  plural1stPerson: Word('вспучиваем', 3),
  plural2ndPerson: Word('вспучиваете', 3),
  plural3rdPerson: Word('вспучивают', 3),
  masculinePast: Word('вспучивал', 3),
  femininePast: Word('вспучивала', 3),
  neuterPast: Word('вспучивало', 3),
  pluralPast: Word('вспучивали', 3),
  imperativeInformal: Word('вспучивай', 3),
  imperativeFormal: Word('вспучивайте', 3),
  imperfect: [],
};

perfectVerbs.set(вспучивать.name.text, вспучивать);

export { вспучивать };