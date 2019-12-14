import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заскакивать: PerfectVerb = {
  name: Word('заскакивать', 4),
  singular1stPerson: Word('заскакиваю', 4),
  singular2ndPerson: Word('заскакиваешь', 4),
  singular3rdPerson: Word('заскакивает', 4),
  plural1stPerson: Word('заскакиваем', 4),
  plural2ndPerson: Word('заскакиваете', 4),
  plural3rdPerson: Word('заскакивают', 4),
  masculinePast: Word('заскакивал', 4),
  femininePast: Word('заскакивала', 4),
  neuterPast: Word('заскакивало', 4),
  pluralPast: Word('заскакивали', 4),
  imperativeInformal: Word('заскакивай', 4),
  imperativeFormal: Word('заскакивайте', 4),
  imperfect: [],
};

perfectVerbs.set(заскакивать.name.text, заскакивать);

export { заскакивать };