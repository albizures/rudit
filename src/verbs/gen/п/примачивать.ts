import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const примачивать: PerfectVerb = {
  name: Word('примачивать', 4),
  singular1stPerson: Word('примачиваю', 4),
  singular2ndPerson: Word('примачиваешь', 4),
  singular3rdPerson: Word('примачивает', 4),
  plural1stPerson: Word('примачиваем', 4),
  plural2ndPerson: Word('примачиваете', 4),
  plural3rdPerson: Word('примачивают', 4),
  masculinePast: Word('примачивал', 4),
  femininePast: Word('примачивала', 4),
  neuterPast: Word('примачивало', 4),
  pluralPast: Word('примачивали', 4),
  imperativeInformal: Word('примачивай', 4),
  imperativeFormal: Word('примачивайте', 4),
  imperfect: [],
};

perfectVerbs.set(примачивать.name.text, примачивать);

export { примачивать };