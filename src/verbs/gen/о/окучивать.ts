import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окучивать: PerfectVerb = {
  name: Word('окучивать', 2),
  singular1stPerson: Word('окучиваю', 2),
  singular2ndPerson: Word('окучиваешь', 2),
  singular3rdPerson: Word('окучивает', 2),
  plural1stPerson: Word('окучиваем', 2),
  plural2ndPerson: Word('окучиваете', 2),
  plural3rdPerson: Word('окучивают', 2),
  masculinePast: Word('окучивал', 2),
  femininePast: Word('окучивала', 2),
  neuterPast: Word('окучивало', 2),
  pluralPast: Word('окучивали', 2),
  imperativeInformal: Word('окучивай', 2),
  imperativeFormal: Word('окучивайте', 2),
  imperfect: [],
};

perfectVerbs.set(окучивать.name.text, окучивать);

export { окучивать };