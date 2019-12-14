import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подчёркивать: PerfectVerb = {
  name: Word('подчёркивать', 4),
  singular1stPerson: Word('подчёркиваю', 4),
  singular2ndPerson: Word('подчёркиваешь', 4),
  singular3rdPerson: Word('подчёркивает', 4),
  plural1stPerson: Word('подчёркиваем', 4),
  plural2ndPerson: Word('подчёркиваете', 4),
  plural3rdPerson: Word('подчёркивают', 4),
  masculinePast: Word('подчёркивал', 4),
  femininePast: Word('подчёркивала', 4),
  neuterPast: Word('подчёркивало', 4),
  pluralPast: Word('подчёркивали', 4),
  imperativeInformal: Word('подчёркивай', 4),
  imperativeFormal: Word('подчёркивайте', 4),
  imperfect: [],
};

perfectVerbs.set(подчёркивать.name.text, подчёркивать);

export { подчёркивать };