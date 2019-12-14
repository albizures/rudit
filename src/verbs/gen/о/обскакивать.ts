import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обскакивать: PerfectVerb = {
  name: Word('обскакивать', 4),
  singular1stPerson: Word('обскакиваю', 4),
  singular2ndPerson: Word('обскакиваешь', 4),
  singular3rdPerson: Word('обскакивает', 4),
  plural1stPerson: Word('обскакиваем', 4),
  plural2ndPerson: Word('обскакиваете', 4),
  plural3rdPerson: Word('обскакивают', 4),
  masculinePast: Word('обскакивал', 4),
  femininePast: Word('обскакивала', 4),
  neuterPast: Word('обскакивало', 4),
  pluralPast: Word('обскакивали', 4),
  imperativeInformal: Word('обскакивай', 4),
  imperativeFormal: Word('обскакивайте', 4),
  imperfect: [],
};

perfectVerbs.set(обскакивать.name.text, обскакивать);

export { обскакивать };