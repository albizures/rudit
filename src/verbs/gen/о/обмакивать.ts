import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обмакивать: PerfectVerb = {
  name: Word('обмакивать', 3),
  singular1stPerson: Word('обмакиваю', 3),
  singular2ndPerson: Word('обмакиваешь', 3),
  singular3rdPerson: Word('обмакивает', 3),
  plural1stPerson: Word('обмакиваем', 3),
  plural2ndPerson: Word('обмакиваете', 3),
  plural3rdPerson: Word('обмакивают', 3),
  masculinePast: Word('обмакивал', 3),
  femininePast: Word('обмакивала', 3),
  neuterPast: Word('обмакивало', 3),
  pluralPast: Word('обмакивали', 3),
  imperativeInformal: Word('обмакивай', 3),
  imperativeFormal: Word('обмакивайте', 3),
  imperfect: [],
};

perfectVerbs.set(обмакивать.name.text, обмакивать);

export { обмакивать };