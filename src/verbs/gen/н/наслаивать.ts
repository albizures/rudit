import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наслаивать: PerfectVerb = {
  name: Word('наслаивать', 4),
  singular1stPerson: Word('наслаиваю', 4),
  singular2ndPerson: Word('наслаиваешь', 4),
  singular3rdPerson: Word('наслаивает', 4),
  plural1stPerson: Word('наслаиваем', 4),
  plural2ndPerson: Word('наслаиваете', 4),
  plural3rdPerson: Word('наслаивают', 4),
  masculinePast: Word('наслаивал', 4),
  femininePast: Word('наслаивала', 4),
  neuterPast: Word('наслаивало', 4),
  pluralPast: Word('наслаивали', 4),
  imperativeInformal: Word('наслаивай', 4),
  imperativeFormal: Word('наслаивайте', 4),
  imperfect: [],
};

perfectVerbs.set(наслаивать.name.text, наслаивать);

export { наслаивать };