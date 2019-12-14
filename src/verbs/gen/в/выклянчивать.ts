import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выклянчивать: PerfectVerb = {
  name: Word('выклянчивать', 4),
  singular1stPerson: Word('выклянчиваю', 4),
  singular2ndPerson: Word('выклянчиваешь', 4),
  singular3rdPerson: Word('выклянчивает', 4),
  plural1stPerson: Word('выклянчиваем', 4),
  plural2ndPerson: Word('выклянчиваете', 4),
  plural3rdPerson: Word('выклянчивают', 4),
  masculinePast: Word('выклянчивал', 4),
  femininePast: Word('выклянчивала', 4),
  neuterPast: Word('выклянчивало', 4),
  pluralPast: Word('выклянчивали', 4),
  imperativeInformal: Word('выклянчивай', 4),
  imperativeFormal: Word('выклянчивайте', 4),
  imperfect: [],
};

perfectVerbs.set(выклянчивать.name.text, выклянчивать);

export { выклянчивать };