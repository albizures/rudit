import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const припаивать: PerfectVerb = {
  name: Word('припаивать', 4),
  singular1stPerson: Word('припаиваю', 4),
  singular2ndPerson: Word('припаиваешь', 4),
  singular3rdPerson: Word('припаивает', 4),
  plural1stPerson: Word('припаиваем', 4),
  plural2ndPerson: Word('припаиваете', 4),
  plural3rdPerson: Word('припаивают', 4),
  masculinePast: Word('припаивал', 4),
  femininePast: Word('припаивала', 4),
  neuterPast: Word('припаивало', 4),
  pluralPast: Word('припаивали', 4),
  imperativeInformal: Word('припаивай', 4),
  imperativeFormal: Word('припаивайте', 4),
  imperfect: [],
};

perfectVerbs.set(припаивать.name.text, припаивать);

export { припаивать };