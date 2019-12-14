import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накачивать: PerfectVerb = {
  name: Word('накачивать', 3),
  singular1stPerson: Word('накачиваю', 3),
  singular2ndPerson: Word('накачиваешь', 3),
  singular3rdPerson: Word('накачивает', 3),
  plural1stPerson: Word('накачиваем', 3),
  plural2ndPerson: Word('накачиваете', 3),
  plural3rdPerson: Word('накачивают', 3),
  masculinePast: Word('накачивал', 3),
  femininePast: Word('накачивала', 3),
  neuterPast: Word('накачивало', 3),
  pluralPast: Word('накачивали', 3),
  imperativeInformal: Word('накачивай', 3),
  imperativeFormal: Word('накачивайте', 3),
  imperfect: [],
};

perfectVerbs.set(накачивать.name.text, накачивать);

export { накачивать };