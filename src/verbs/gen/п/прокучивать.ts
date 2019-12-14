import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прокучивать: PerfectVerb = {
  name: Word('прокучивать', 4),
  singular1stPerson: Word('прокучиваю', 4),
  singular2ndPerson: Word('прокучиваешь', 4),
  singular3rdPerson: Word('прокучивает', 4),
  plural1stPerson: Word('прокучиваем', 4),
  plural2ndPerson: Word('прокучиваете', 4),
  plural3rdPerson: Word('прокучивают', 4),
  masculinePast: Word('прокучивал', 4),
  femininePast: Word('прокучивала', 4),
  neuterPast: Word('прокучивало', 4),
  pluralPast: Word('прокучивали', 4),
  imperativeInformal: Word('прокучивай', 4),
  imperativeFormal: Word('прокучивайте', 4),
  imperfect: [],
};

perfectVerbs.set(прокучивать.name.text, прокучивать);

export { прокучивать };