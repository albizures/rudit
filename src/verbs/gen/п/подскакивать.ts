import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подскакивать: PerfectVerb = {
  name: Word('подскакивать', 5),
  singular1stPerson: Word('подскакиваю', 5),
  singular2ndPerson: Word('подскакиваешь', 5),
  singular3rdPerson: Word('подскакивает', 5),
  plural1stPerson: Word('подскакиваем', 5),
  plural2ndPerson: Word('подскакиваете', 5),
  plural3rdPerson: Word('подскакивают', 5),
  masculinePast: Word('подскакивал', 5),
  femininePast: Word('подскакивала', 5),
  neuterPast: Word('подскакивало', 5),
  pluralPast: Word('подскакивали', 5),
  imperativeInformal: Word('подскакивай', 5),
  imperativeFormal: Word('подскакивайте', 5),
  imperfect: [],
};

perfectVerbs.set(подскакивать.name.text, подскакивать);

export { подскакивать };