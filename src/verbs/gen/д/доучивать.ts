import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доучивать: PerfectVerb = {
  name: Word('доучивать', 2),
  singular1stPerson: Word('доучиваю', 2),
  singular2ndPerson: Word('доучиваешь', 2),
  singular3rdPerson: Word('доучивает', 2),
  plural1stPerson: Word('доучиваем', 2),
  plural2ndPerson: Word('доучиваете', 2),
  plural3rdPerson: Word('доучивают', 2),
  masculinePast: Word('доучивал', 2),
  femininePast: Word('доучивала', 2),
  neuterPast: Word('доучивало', 2),
  pluralPast: Word('доучивали', 2),
  imperativeInformal: Word('доучивай', 2),
  imperativeFormal: Word('доучивайте', 2),
  imperfect: [],
};

perfectVerbs.set(доучивать.name.text, доучивать);

export { доучивать };