import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отскакивать: PerfectVerb = {
  name: Word('отскакивать', 4),
  singular1stPerson: Word('отскакиваю', 4),
  singular2ndPerson: Word('отскакиваешь', 4),
  singular3rdPerson: Word('отскакивает', 4),
  plural1stPerson: Word('отскакиваем', 4),
  plural2ndPerson: Word('отскакиваете', 4),
  plural3rdPerson: Word('отскакивают', 4),
  masculinePast: Word('отскакивал', 4),
  femininePast: Word('отскакивала', 4),
  neuterPast: Word('отскакивало', 4),
  pluralPast: Word('отскакивали', 4),
  imperativeInformal: Word('отскакивай', 4),
  imperativeFormal: Word('отскакивайте', 4),
  imperfect: [],
};

perfectVerbs.set(отскакивать.name.text, отскакивать);

export { отскакивать };