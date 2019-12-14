import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зашторивать: PerfectVerb = {
  name: Word('зашторивать', 4),
  singular1stPerson: Word('зашториваю', 4),
  singular2ndPerson: Word('зашториваешь', 4),
  singular3rdPerson: Word('зашторивает', 4),
  plural1stPerson: Word('зашториваем', 4),
  plural2ndPerson: Word('зашториваете', 4),
  plural3rdPerson: Word('зашторивают', 4),
  masculinePast: Word('зашторивал', 4),
  femininePast: Word('зашторивала', 4),
  neuterPast: Word('зашторивало', 4),
  pluralPast: Word('зашторивали', 4),
  imperativeInformal: Word('зашторивай', 4),
  imperativeFormal: Word('зашторивайте', 4),
  imperfect: [],
};

perfectVerbs.set(зашторивать.name.text, зашторивать);

export { зашторивать };