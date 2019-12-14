import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вынянчивать: PerfectVerb = {
  name: Word('вынянчивать', 3),
  singular1stPerson: Word('вынянчиваю', 3),
  singular2ndPerson: Word('вынянчиваешь', 3),
  singular3rdPerson: Word('вынянчивает', 3),
  plural1stPerson: Word('вынянчиваем', 3),
  plural2ndPerson: Word('вынянчиваете', 3),
  plural3rdPerson: Word('вынянчивают', 3),
  masculinePast: Word('вынянчивал', 3),
  femininePast: Word('вынянчивала', 3),
  neuterPast: Word('вынянчивало', 3),
  pluralPast: Word('вынянчивали', 3),
  imperativeInformal: Word('вынянчивай', 3),
  imperativeFormal: Word('вынянчивайте', 3),
  imperfect: [],
};

perfectVerbs.set(вынянчивать.name.text, вынянчивать);

export { вынянчивать };