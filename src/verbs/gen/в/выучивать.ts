import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выучивать: PerfectVerb = {
  name: Word('выучивать', 2),
  singular1stPerson: Word('выучиваю', 2),
  singular2ndPerson: Word('выучиваешь', 2),
  singular3rdPerson: Word('выучивает', 2),
  plural1stPerson: Word('выучиваем', 2),
  plural2ndPerson: Word('выучиваете', 2),
  plural3rdPerson: Word('выучивают', 2),
  masculinePast: Word('выучивал', 2),
  femininePast: Word('выучивала', 2),
  neuterPast: Word('выучивало', 2),
  pluralPast: Word('выучивали', 2),
  imperativeInformal: Word('выучивай', 2),
  imperativeFormal: Word('выучивайте', 2),
  imperfect: [],
};

perfectVerbs.set(выучивать.name.text, выучивать);

export { выучивать };