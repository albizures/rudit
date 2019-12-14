import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вычёркивать: PerfectVerb = {
  name: Word('вычёркивать', 3),
  singular1stPerson: Word('вычёркиваю', 3),
  singular2ndPerson: Word('вычёркиваешь', 3),
  singular3rdPerson: Word('вычёркивает', 3),
  plural1stPerson: Word('вычёркиваем', 3),
  plural2ndPerson: Word('вычёркиваете', 3),
  plural3rdPerson: Word('вычёркивают', 3),
  masculinePast: Word('вычёркивал', 3),
  femininePast: Word('вычёркивала', 3),
  neuterPast: Word('вычёркивало', 3),
  pluralPast: Word('вычёркивали', 3),
  imperativeInformal: Word('вычёркивай', 3),
  imperativeFormal: Word('вычёркивайте', 3),
  imperfect: [],
};

perfectVerbs.set(вычёркивать.name.text, вычёркивать);

export { вычёркивать };