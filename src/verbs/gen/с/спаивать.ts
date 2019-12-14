import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спаивать: PerfectVerb = {
  name: Word('спаивать', 2),
  singular1stPerson: Word('спаиваю', 2),
  singular2ndPerson: Word('спаиваешь', 2),
  singular3rdPerson: Word('спаивает', 2),
  plural1stPerson: Word('спаиваем', 2),
  plural2ndPerson: Word('спаиваете', 2),
  plural3rdPerson: Word('спаивают', 2),
  masculinePast: Word('спаивал', 2),
  femininePast: Word('спаивала', 2),
  neuterPast: Word('спаивало', 2),
  pluralPast: Word('спаивали', 2),
  imperativeInformal: Word('спаивай', 2),
  imperativeFormal: Word('спаивайте', 2),
  imperfect: [],
};

perfectVerbs.set(спаивать.name.text, спаивать);

export { спаивать };