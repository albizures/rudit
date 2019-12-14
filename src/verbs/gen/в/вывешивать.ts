import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вывешивать: PerfectVerb = {
  name: Word('вывешивать', 3),
  singular1stPerson: Word('вывешиваю', 3),
  singular2ndPerson: Word('вывешиваешь', 3),
  singular3rdPerson: Word('вывешивает', 3),
  plural1stPerson: Word('вывешиваем', 3),
  plural2ndPerson: Word('вывешиваете', 3),
  plural3rdPerson: Word('вывешивают', 3),
  masculinePast: Word('вывешивал', 3),
  femininePast: Word('вывешивала', 3),
  neuterPast: Word('вывешивало', 3),
  pluralPast: Word('вывешивали', 3),
  imperativeInformal: Word('вывешивай', 3),
  imperativeFormal: Word('вывешивайте', 3),
  imperfect: [],
};

perfectVerbs.set(вывешивать.name.text, вывешивать);

export { вывешивать };