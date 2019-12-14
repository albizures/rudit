import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскачивать: PerfectVerb = {
  name: Word('раскачивать', 4),
  singular1stPerson: Word('раскачиваю', 4),
  singular2ndPerson: Word('раскачиваешь', 4),
  singular3rdPerson: Word('раскачивает', 4),
  plural1stPerson: Word('раскачиваем', 4),
  plural2ndPerson: Word('раскачиваете', 4),
  plural3rdPerson: Word('раскачивают', 4),
  masculinePast: Word('раскачивал', 4),
  femininePast: Word('раскачивала', 4),
  neuterPast: Word('раскачивало', 4),
  pluralPast: Word('раскачивали', 4),
  imperativeInformal: Word('раскачивай', 4),
  imperativeFormal: Word('раскачивайте', 4),
  imperfect: [],
};

perfectVerbs.set(раскачивать.name.text, раскачивать);

export { раскачивать };