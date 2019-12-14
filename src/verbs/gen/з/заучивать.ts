import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заучивать: PerfectVerb = {
  name: Word('заучивать', 2),
  singular1stPerson: Word('заучиваю', 2),
  singular2ndPerson: Word('заучиваешь', 2),
  singular3rdPerson: Word('заучивает', 2),
  plural1stPerson: Word('заучиваем', 2),
  plural2ndPerson: Word('заучиваете', 2),
  plural3rdPerson: Word('заучивают', 2),
  masculinePast: Word('заучивал', 2),
  femininePast: Word('заучивала', 2),
  neuterPast: Word('заучивало', 2),
  pluralPast: Word('заучивали', 2),
  imperativeInformal: Word('заучивай', 2),
  imperativeFormal: Word('заучивайте', 2),
  imperfect: [],
};

perfectVerbs.set(заучивать.name.text, заучивать);

export { заучивать };