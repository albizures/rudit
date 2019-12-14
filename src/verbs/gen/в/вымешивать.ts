import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вымешивать: PerfectVerb = {
  name: Word('вымешивать', 3),
  singular1stPerson: Word('вымешиваю', 3),
  singular2ndPerson: Word('вымешиваешь', 3),
  singular3rdPerson: Word('вымешивает', 3),
  plural1stPerson: Word('вымешиваем', 3),
  plural2ndPerson: Word('вымешиваете', 3),
  plural3rdPerson: Word('вымешивают', 3),
  masculinePast: Word('вымешивал', 3),
  femininePast: Word('вымешивала', 3),
  neuterPast: Word('вымешивало', 3),
  pluralPast: Word('вымешивали', 3),
  imperativeInformal: Word('вымешивай', 3),
  imperativeFormal: Word('вымешивайте', 3),
  imperfect: [],
};

perfectVerbs.set(вымешивать.name.text, вымешивать);

export { вымешивать };