import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отучивать: PerfectVerb = {
  name: Word('отучивать', 2),
  singular1stPerson: Word('отучиваю', 2),
  singular2ndPerson: Word('отучиваешь', 2),
  singular3rdPerson: Word('отучивает', 2),
  plural1stPerson: Word('отучиваем', 2),
  plural2ndPerson: Word('отучиваете', 2),
  plural3rdPerson: Word('отучивают', 2),
  masculinePast: Word('отучивал', 2),
  femininePast: Word('отучивала', 2),
  neuterPast: Word('отучивало', 2),
  pluralPast: Word('отучивали', 2),
  imperativeInformal: Word('отучивай', 2),
  imperativeFormal: Word('отучивайте', 2),
  imperfect: [],
};

perfectVerbs.set(отучивать.name.text, отучивать);

export { отучивать };