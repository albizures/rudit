import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вколачивать: PerfectVerb = {
  name: Word('вколачивать', 4),
  singular1stPerson: Word('вколачиваю', 4),
  singular2ndPerson: Word('вколачиваешь', 4),
  singular3rdPerson: Word('вколачивает', 4),
  plural1stPerson: Word('вколачиваем', 4),
  plural2ndPerson: Word('вколачиваете', 4),
  plural3rdPerson: Word('вколачивают', 4),
  masculinePast: Word('вколачивал', 4),
  femininePast: Word('вколачивала', 4),
  neuterPast: Word('вколачивало', 4),
  pluralPast: Word('вколачивали', 4),
  imperativeInformal: Word('вколачивай', 4),
  imperativeFormal: Word('вколачивайте', 4),
  imperfect: [],
};

perfectVerbs.set(вколачивать.name.text, вколачивать);

export { вколачивать };