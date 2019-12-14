import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскулачивать: PerfectVerb = {
  name: Word('раскулачивать', 6),
  singular1stPerson: Word('раскулачиваю', 6),
  singular2ndPerson: Word('раскулачиваешь', 6),
  singular3rdPerson: Word('раскулачивает', 6),
  plural1stPerson: Word('раскулачиваем', 6),
  plural2ndPerson: Word('раскулачиваете', 6),
  plural3rdPerson: Word('раскулачивают', 6),
  masculinePast: Word('раскулачивал', 6),
  femininePast: Word('раскулачивала', 6),
  neuterPast: Word('раскулачивало', 6),
  pluralPast: Word('раскулачивали', 6),
  imperativeInformal: Word('раскулачивай', 6),
  imperativeFormal: Word('раскулачивайте', 6),
  imperfect: [],
};

perfectVerbs.set(раскулачивать.name.text, раскулачивать);

export { раскулачивать };