import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подчёркивать: PerfectVerb = {
  name: Word('подчёркивать', 9),
  singular1stPerson: Word('подчёркиваю', 9),
  singular2ndPerson: Word('подчёркиваешь', 9),
  singular3rdPerson: Word('подчёркивает', 9),
  plural1stPerson: Word('подчёркиваем', 9),
  plural2ndPerson: Word('подчёркиваете', 9),
  plural3rdPerson: Word('подчёркивают', 9),
  masculinePast: Word('подчёркивал', 9),
  femininePast: Word('подчёркивала', 9),
  neuterPast: Word('подчёркивало', 9),
  pluralPast: Word('подчёркивали', 9),
  imperativeInformal: Word('подчёркивай', 9),
  imperativeFormal: Word('подчёркивайте', 9),
  imperfect: [],
};

perfectVerbs.set(подчёркивать.name.text, подчёркивать);

export { подчёркивать };