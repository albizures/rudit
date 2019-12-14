import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прищучивать: PerfectVerb = {
  name: Word('прищучивать', 4),
  singular1stPerson: Word('прищучиваю', 4),
  singular2ndPerson: Word('прищучиваешь', 4),
  singular3rdPerson: Word('прищучивает', 4),
  plural1stPerson: Word('прищучиваем', 4),
  plural2ndPerson: Word('прищучиваете', 4),
  plural3rdPerson: Word('прищучивают', 4),
  masculinePast: Word('прищучивал', 4),
  femininePast: Word('прищучивала', 4),
  neuterPast: Word('прищучивало', 4),
  pluralPast: Word('прищучивали', 4),
  imperativeInformal: Word('прищучивай', 4),
  imperativeFormal: Word('прищучивайте', 4),
  imperfect: [],
};

perfectVerbs.set(прищучивать.name.text, прищучивать);

export { прищучивать };