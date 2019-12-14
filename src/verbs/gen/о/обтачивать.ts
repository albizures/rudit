import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обтачивать: PerfectVerb = {
  name: Word('обтачивать', 3),
  singular1stPerson: Word('обтачиваю', 3),
  singular2ndPerson: Word('обтачиваешь', 3),
  singular3rdPerson: Word('обтачивает', 3),
  plural1stPerson: Word('обтачиваем', 3),
  plural2ndPerson: Word('обтачиваете', 3),
  plural3rdPerson: Word('обтачивают', 3),
  masculinePast: Word('обтачивал', 3),
  femininePast: Word('обтачивала', 3),
  neuterPast: Word('обтачивало', 3),
  pluralPast: Word('обтачивали', 3),
  imperativeInformal: Word('обтачивай', 3),
  imperativeFormal: Word('обтачивайте', 3),
  imperfect: [],
};

perfectVerbs.set(обтачивать.name.text, обтачивать);

export { обтачивать };