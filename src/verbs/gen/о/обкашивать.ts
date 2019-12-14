import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обкашивать: PerfectVerb = {
  name: Word('обкашивать', 3),
  singular1stPerson: Word('обкашиваю', 3),
  singular2ndPerson: Word('обкашиваешь', 3),
  singular3rdPerson: Word('обкашивает', 3),
  plural1stPerson: Word('обкашиваем', 3),
  plural2ndPerson: Word('обкашиваете', 3),
  plural3rdPerson: Word('обкашивают', 3),
  masculinePast: Word('обкашивал', 3),
  femininePast: Word('обкашивала', 3),
  neuterPast: Word('обкашивало', 3),
  pluralPast: Word('обкашивали', 3),
  imperativeInformal: Word('обкашивай', 3),
  imperativeFormal: Word('обкашивайте', 3),
  imperfect: [],
};

perfectVerbs.set(обкашивать.name.text, обкашивать);

export { обкашивать };