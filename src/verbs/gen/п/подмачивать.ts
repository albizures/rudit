import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подмачивать: PerfectVerb = {
  name: Word('подмачивать', 4),
  singular1stPerson: Word('подмачиваю', 4),
  singular2ndPerson: Word('подмачиваешь', 4),
  singular3rdPerson: Word('подмачивает', 4),
  plural1stPerson: Word('подмачиваем', 4),
  plural2ndPerson: Word('подмачиваете', 4),
  plural3rdPerson: Word('подмачивают', 4),
  masculinePast: Word('подмачивал', 4),
  femininePast: Word('подмачивала', 4),
  neuterPast: Word('подмачивало', 4),
  pluralPast: Word('подмачивали', 4),
  imperativeInformal: Word('подмачивай', 4),
  imperativeFormal: Word('подмачивайте', 4),
  imperfect: [],
};

perfectVerbs.set(подмачивать.name.text, подмачивать);

export { подмачивать };