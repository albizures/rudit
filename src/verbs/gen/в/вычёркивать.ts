import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вычёркивать: PerfectVerb = {
  name: Word('вычёркивать', 8),
  singular1stPerson: Word('вычёркиваю', 8),
  singular2ndPerson: Word('вычёркиваешь', 8),
  singular3rdPerson: Word('вычёркивает', 8),
  plural1stPerson: Word('вычёркиваем', 8),
  plural2ndPerson: Word('вычёркиваете', 8),
  plural3rdPerson: Word('вычёркивают', 8),
  masculinePast: Word('вычёркивал', 8),
  femininePast: Word('вычёркивала', 8),
  neuterPast: Word('вычёркивало', 8),
  pluralPast: Word('вычёркивали', 8),
  imperativeInformal: Word('вычёркивай', 8),
  imperativeFormal: Word('вычёркивайте', 8),
  imperfect: [],
};

perfectVerbs.set(вычёркивать.name.text, вычёркивать);

export { вычёркивать };