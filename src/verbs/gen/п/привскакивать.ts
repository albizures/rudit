import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const привскакивать: PerfectVerb = {
  name: Word('привскакивать', 6),
  singular1stPerson: Word('привскакиваю', 6),
  singular2ndPerson: Word('привскакиваешь', 6),
  singular3rdPerson: Word('привскакивает', 6),
  plural1stPerson: Word('привскакиваем', 6),
  plural2ndPerson: Word('привскакиваете', 6),
  plural3rdPerson: Word('привскакивают', 6),
  masculinePast: Word('привскакивал', 6),
  femininePast: Word('привскакивала', 6),
  neuterPast: Word('привскакивало', 6),
  pluralPast: Word('привскакивали', 6),
  imperativeInformal: Word('привскакивай', 6),
  imperativeFormal: Word('привскакивайте', 6),
  imperfect: [],
};

perfectVerbs.set(привскакивать.name.text, привскакивать);

export { привскакивать };