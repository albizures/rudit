import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассучивать: PerfectVerb = {
  name: Word('рассучивать', 4),
  singular1stPerson: Word('рассучиваю', 4),
  singular2ndPerson: Word('рассучиваешь', 4),
  singular3rdPerson: Word('рассучивает', 4),
  plural1stPerson: Word('рассучиваем', 4),
  plural2ndPerson: Word('рассучиваете', 4),
  plural3rdPerson: Word('рассучивают', 4),
  masculinePast: Word('рассучивал', 4),
  femininePast: Word('рассучивала', 4),
  neuterPast: Word('рассучивало', 4),
  pluralPast: Word('рассучивали', 4),
  imperativeInformal: Word('рассучивай', 4),
  imperativeFormal: Word('рассучивайте', 4),
  imperfect: [],
};

perfectVerbs.set(рассучивать.name.text, рассучивать);

export { рассучивать };