import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обволакивать: PerfectVerb = {
  name: Word('обволакивать', 5),
  singular1stPerson: Word('обволакиваю', 5),
  singular2ndPerson: Word('обволакиваешь', 5),
  singular3rdPerson: Word('обволакивает', 5),
  plural1stPerson: Word('обволакиваем', 5),
  plural2ndPerson: Word('обволакиваете', 5),
  plural3rdPerson: Word('обволакивают', 5),
  masculinePast: Word('обволакивал', 5),
  femininePast: Word('обволакивала', 5),
  neuterPast: Word('обволакивало', 5),
  pluralPast: Word('обволакивали', 5),
  imperativeInformal: Word('обволакивай', 5),
  imperativeFormal: Word('обволакивайте', 5),
  imperfect: [],
};

perfectVerbs.set(обволакивать.name.text, обволакивать);

export { обволакивать };