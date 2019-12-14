import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обтягивать: PerfectVerb = {
  name: Word('обтягивать', 3),
  singular1stPerson: Word('обтягиваю', 3),
  singular2ndPerson: Word('обтягиваешь', 3),
  singular3rdPerson: Word('обтягивает', 3),
  plural1stPerson: Word('обтягиваем', 3),
  plural2ndPerson: Word('обтягиваете', 3),
  plural3rdPerson: Word('обтягивают', 3),
  masculinePast: Word('обтягивал', 3),
  femininePast: Word('обтягивала', 3),
  neuterPast: Word('обтягивало', 3),
  pluralPast: Word('обтягивали', 3),
  imperativeInformal: Word('обтягивай', 3),
  imperativeFormal: Word('обтягивайте', 3),
  imperfect: [],
};

perfectVerbs.set(обтягивать.name.text, обтягивать);

export { обтягивать };