import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обвеивать: PerfectVerb = {
  name: Word('обвеивать', 3),
  singular1stPerson: Word('обвеиваю', 3),
  singular2ndPerson: Word('обвеиваешь', 3),
  singular3rdPerson: Word('обвеивает', 3),
  plural1stPerson: Word('обвеиваем', 3),
  plural2ndPerson: Word('обвеиваете', 3),
  plural3rdPerson: Word('обвеивают', 3),
  masculinePast: Word('обвеивал', 3),
  femininePast: Word('обвеивала', 3),
  neuterPast: Word('обвеивало', 3),
  pluralPast: Word('обвеивали', 3),
  imperativeInformal: Word('обвеивай', 3),
  imperativeFormal: Word('обвеивайте', 3),
  imperfect: [],
};

perfectVerbs.set(обвеивать.name.text, обвеивать);

export { обвеивать };