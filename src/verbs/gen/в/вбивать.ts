import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вбивать: PerfectVerb = {
  name: Word('вбивать', 4),
  singular1stPerson: Word('вбиваю', 4),
  singular2ndPerson: Word('вбиваешь', 4),
  singular3rdPerson: Word('вбивает', 4),
  plural1stPerson: Word('вбиваем', 4),
  plural2ndPerson: Word('вбиваете', 4),
  plural3rdPerson: Word('вбивают', 4),
  masculinePast: Word('вбивал', 4),
  femininePast: Word('вбивала', 4),
  neuterPast: Word('вбивало', 4),
  pluralPast: Word('вбивали', 4),
  imperativeInformal: Word('вбивай', 4),
  imperativeFormal: Word('вбивайте', 4),
  imperfect: [],
};

perfectVerbs.set(вбивать.name.text, вбивать);

export { вбивать };