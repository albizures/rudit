import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прослаивать: PerfectVerb = {
  name: Word('прослаивать', 5),
  singular1stPerson: Word('прослаиваю', 5),
  singular2ndPerson: Word('прослаиваешь', 5),
  singular3rdPerson: Word('прослаивает', 5),
  plural1stPerson: Word('прослаиваем', 5),
  plural2ndPerson: Word('прослаиваете', 5),
  plural3rdPerson: Word('прослаивают', 5),
  masculinePast: Word('прослаивал', 5),
  femininePast: Word('прослаивала', 5),
  neuterPast: Word('прослаивало', 5),
  pluralPast: Word('прослаивали', 5),
  imperativeInformal: Word('прослаивай', 5),
  imperativeFormal: Word('прослаивайте', 5),
  imperfect: [],
};

perfectVerbs.set(прослаивать.name.text, прослаивать);

export { прослаивать };