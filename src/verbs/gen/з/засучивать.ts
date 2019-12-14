import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засучивать: PerfectVerb = {
  name: Word('засучивать', 3),
  singular1stPerson: Word('засучиваю', 3),
  singular2ndPerson: Word('засучиваешь', 3),
  singular3rdPerson: Word('засучивает', 3),
  plural1stPerson: Word('засучиваем', 3),
  plural2ndPerson: Word('засучиваете', 3),
  plural3rdPerson: Word('засучивают', 3),
  masculinePast: Word('засучивал', 3),
  femininePast: Word('засучивала', 3),
  neuterPast: Word('засучивало', 3),
  pluralPast: Word('засучивали', 3),
  imperativeInformal: Word('засучивай', 3),
  imperativeFormal: Word('засучивайте', 3),
  imperfect: [],
};

perfectVerbs.set(засучивать.name.text, засучивать);

export { засучивать };