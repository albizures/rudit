import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подкачивать: PerfectVerb = {
  name: Word('подкачивать', 4),
  singular1stPerson: Word('подкачиваю', 4),
  singular2ndPerson: Word('подкачиваешь', 4),
  singular3rdPerson: Word('подкачивает', 4),
  plural1stPerson: Word('подкачиваем', 4),
  plural2ndPerson: Word('подкачиваете', 4),
  plural3rdPerson: Word('подкачивают', 4),
  masculinePast: Word('подкачивал', 4),
  femininePast: Word('подкачивала', 4),
  neuterPast: Word('подкачивало', 4),
  pluralPast: Word('подкачивали', 4),
  imperativeInformal: Word('подкачивай', 4),
  imperativeFormal: Word('подкачивайте', 4),
  imperfect: [],
};

perfectVerbs.set(подкачивать.name.text, подкачивать);

export { подкачивать };