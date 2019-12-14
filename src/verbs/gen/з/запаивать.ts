import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запаивать: PerfectVerb = {
  name: Word('запаивать', 3),
  singular1stPerson: Word('запаиваю', 3),
  singular2ndPerson: Word('запаиваешь', 3),
  singular3rdPerson: Word('запаивает', 3),
  plural1stPerson: Word('запаиваем', 3),
  plural2ndPerson: Word('запаиваете', 3),
  plural3rdPerson: Word('запаивают', 3),
  masculinePast: Word('запаивал', 3),
  femininePast: Word('запаивала', 3),
  neuterPast: Word('запаивало', 3),
  pluralPast: Word('запаивали', 3),
  imperativeInformal: Word('запаивай', 3),
  imperativeFormal: Word('запаивайте', 3),
  imperfect: [],
};

perfectVerbs.set(запаивать.name.text, запаивать);

export { запаивать };