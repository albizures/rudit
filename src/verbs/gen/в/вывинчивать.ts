import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вывинчивать: PerfectVerb = {
  name: Word('вывинчивать', 3),
  singular1stPerson: Word('вывинчиваю', 3),
  singular2ndPerson: Word('вывинчиваешь', 3),
  singular3rdPerson: Word('вывинчивает', 3),
  plural1stPerson: Word('вывинчиваем', 3),
  plural2ndPerson: Word('вывинчиваете', 3),
  plural3rdPerson: Word('вывинчивают', 3),
  masculinePast: Word('вывинчивал', 3),
  femininePast: Word('вывинчивала', 3),
  neuterPast: Word('вывинчивало', 3),
  pluralPast: Word('вывинчивали', 3),
  imperativeInformal: Word('вывинчивай', 3),
  imperativeFormal: Word('вывинчивайте', 3),
  imperfect: [],
};

perfectVerbs.set(вывинчивать.name.text, вывинчивать);

export { вывинчивать };