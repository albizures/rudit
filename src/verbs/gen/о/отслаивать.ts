import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отслаивать: PerfectVerb = {
  name: Word('отслаивать', 4),
  singular1stPerson: Word('отслаиваю', 4),
  singular2ndPerson: Word('отслаиваешь', 4),
  singular3rdPerson: Word('отслаивает', 4),
  plural1stPerson: Word('отслаиваем', 4),
  plural2ndPerson: Word('отслаиваете', 4),
  plural3rdPerson: Word('отслаивают', 4),
  masculinePast: Word('отслаивал', 4),
  femininePast: Word('отслаивала', 4),
  neuterPast: Word('отслаивало', 4),
  pluralPast: Word('отслаивали', 4),
  imperativeInformal: Word('отслаивай', 4),
  imperativeFormal: Word('отслаивайте', 4),
  imperfect: [],
};

perfectVerbs.set(отслаивать.name.text, отслаивать);

export { отслаивать };