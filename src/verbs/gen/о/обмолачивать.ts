import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обмолачивать: PerfectVerb = {
  name: Word('обмолачивать', 5),
  singular1stPerson: Word('обмолачиваю', 5),
  singular2ndPerson: Word('обмолачиваешь', 5),
  singular3rdPerson: Word('обмолачивает', 5),
  plural1stPerson: Word('обмолачиваем', 5),
  plural2ndPerson: Word('обмолачиваете', 5),
  plural3rdPerson: Word('обмолачивают', 5),
  masculinePast: Word('обмолачивал', 5),
  femininePast: Word('обмолачивала', 5),
  neuterPast: Word('обмолачивало', 5),
  pluralPast: Word('обмолачивали', 5),
  imperativeInformal: Word('обмолачивай', 5),
  imperativeFormal: Word('обмолачивайте', 5),
  imperfect: [],
};

perfectVerbs.set(обмолачивать.name.text, обмолачивать);

export { обмолачивать };