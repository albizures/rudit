import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расколачивать: PerfectVerb = {
  name: Word('расколачивать', 6),
  singular1stPerson: Word('расколачиваю', 6),
  singular2ndPerson: Word('расколачиваешь', 6),
  singular3rdPerson: Word('расколачивает', 6),
  plural1stPerson: Word('расколачиваем', 6),
  plural2ndPerson: Word('расколачиваете', 6),
  plural3rdPerson: Word('расколачивают', 6),
  masculinePast: Word('расколачивал', 6),
  femininePast: Word('расколачивала', 6),
  neuterPast: Word('расколачивало', 6),
  pluralPast: Word('расколачивали', 6),
  imperativeInformal: Word('расколачивай', 6),
  imperativeFormal: Word('расколачивайте', 6),
  imperfect: [],
};

perfectVerbs.set(расколачивать.name.text, расколачивать);

export { расколачивать };