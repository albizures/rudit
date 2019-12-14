import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сворачивать: PerfectVerb = {
  name: Word('сворачивать', 4),
  singular1stPerson: Word('сворачиваю', 4),
  singular2ndPerson: Word('сворачиваешь', 4),
  singular3rdPerson: Word('сворачивает', 4),
  plural1stPerson: Word('сворачиваем', 4),
  plural2ndPerson: Word('сворачиваете', 4),
  plural3rdPerson: Word('сворачивают', 4),
  masculinePast: Word('сворачивал', 4),
  femininePast: Word('сворачивала', 4),
  neuterPast: Word('сворачивало', 4),
  pluralPast: Word('сворачивали', 4),
  imperativeInformal: Word('сворачивай', 4),
  imperativeFormal: Word('сворачивайте', 4),
  imperfect: [],
};

perfectVerbs.set(сворачивать.name.text, сворачивать);

export { сворачивать };