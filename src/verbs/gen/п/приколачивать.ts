import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приколачивать: PerfectVerb = {
  name: Word('приколачивать', 6),
  singular1stPerson: Word('приколачиваю', 6),
  singular2ndPerson: Word('приколачиваешь', 6),
  singular3rdPerson: Word('приколачивает', 6),
  plural1stPerson: Word('приколачиваем', 6),
  plural2ndPerson: Word('приколачиваете', 6),
  plural3rdPerson: Word('приколачивают', 6),
  masculinePast: Word('приколачивал', 6),
  femininePast: Word('приколачивала', 6),
  neuterPast: Word('приколачивало', 6),
  pluralPast: Word('приколачивали', 6),
  imperativeInformal: Word('приколачивай', 6),
  imperativeFormal: Word('приколачивайте', 6),
  imperfect: [],
};

perfectVerbs.set(приколачивать.name.text, приколачивать);

export { приколачивать };