import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отстаивать: PerfectVerb = {
  name: Word('отстаивать', 4),
  singular1stPerson: Word('отстаиваю', 4),
  singular2ndPerson: Word('отстаиваешь', 4),
  singular3rdPerson: Word('отстаивает', 4),
  plural1stPerson: Word('отстаиваем', 4),
  plural2ndPerson: Word('отстаиваете', 4),
  plural3rdPerson: Word('отстаивают', 4),
  masculinePast: Word('отстаивал', 4),
  femininePast: Word('отстаивала', 4),
  neuterPast: Word('отстаивало', 4),
  pluralPast: Word('отстаивали', 4),
  imperativeInformal: Word('отстаивай', 4),
  imperativeFormal: Word('отстаивайте', 4),
  imperfect: ['отстоять'],
};

perfectVerbs.set(отстаивать.name.text, отстаивать);

export { отстаивать };