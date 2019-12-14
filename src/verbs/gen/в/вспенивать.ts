import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вспенивать: PerfectVerb = {
  name: Word('вспенивать', 3),
  singular1stPerson: Word('вспениваю', 3),
  singular2ndPerson: Word('вспениваешь', 3),
  singular3rdPerson: Word('вспенивает', 3),
  plural1stPerson: Word('вспениваем', 3),
  plural2ndPerson: Word('вспениваете', 3),
  plural3rdPerson: Word('вспенивают', 3),
  masculinePast: Word('вспенивал', 3),
  femininePast: Word('вспенивала', 3),
  neuterPast: Word('вспенивало', 3),
  pluralPast: Word('вспенивали', 3),
  imperativeInformal: Word('вспенивай', 3),
  imperativeFormal: Word('вспенивайте', 3),
  imperfect: [],
};

perfectVerbs.set(вспенивать.name.text, вспенивать);

export { вспенивать };