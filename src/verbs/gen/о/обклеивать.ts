import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обклеивать: PerfectVerb = {
  name: Word('обклеивать', 4),
  singular1stPerson: Word('обклеиваю', 4),
  singular2ndPerson: Word('обклеиваешь', 4),
  singular3rdPerson: Word('обклеивает', 4),
  plural1stPerson: Word('обклеиваем', 4),
  plural2ndPerson: Word('обклеиваете', 4),
  plural3rdPerson: Word('обклеивают', 4),
  masculinePast: Word('обклеивал', 4),
  femininePast: Word('обклеивала', 4),
  neuterPast: Word('обклеивало', 4),
  pluralPast: Word('обклеивали', 4),
  imperativeInformal: Word('обклеивай', 4),
  imperativeFormal: Word('обклеивайте', 4),
  imperfect: [],
};

perfectVerbs.set(обклеивать.name.text, обклеивать);

export { обклеивать };