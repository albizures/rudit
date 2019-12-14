import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наскакивать: PerfectVerb = {
  name: Word('наскакивать', 4),
  singular1stPerson: Word('наскакиваю', 4),
  singular2ndPerson: Word('наскакиваешь', 4),
  singular3rdPerson: Word('наскакивает', 4),
  plural1stPerson: Word('наскакиваем', 4),
  plural2ndPerson: Word('наскакиваете', 4),
  plural3rdPerson: Word('наскакивают', 4),
  masculinePast: Word('наскакивал', 4),
  femininePast: Word('наскакивала', 4),
  neuterPast: Word('наскакивало', 4),
  pluralPast: Word('наскакивали', 4),
  imperativeInformal: Word('наскакивай', 4),
  imperativeFormal: Word('наскакивайте', 4),
  imperfect: [],
};

perfectVerbs.set(наскакивать.name.text, наскакивать);

export { наскакивать };