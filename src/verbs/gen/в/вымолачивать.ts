import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вымолачивать: PerfectVerb = {
  name: Word('вымолачивать', 5),
  singular1stPerson: Word('вымолачиваю', 5),
  singular2ndPerson: Word('вымолачиваешь', 5),
  singular3rdPerson: Word('вымолачивает', 5),
  plural1stPerson: Word('вымолачиваем', 5),
  plural2ndPerson: Word('вымолачиваете', 5),
  plural3rdPerson: Word('вымолачивают', 5),
  masculinePast: Word('вымолачивал', 5),
  femininePast: Word('вымолачивала', 5),
  neuterPast: Word('вымолачивало', 5),
  pluralPast: Word('вымолачивали', 5),
  imperativeInformal: Word('вымолачивай', 5),
  imperativeFormal: Word('вымолачивайте', 5),
  imperfect: [],
};

perfectVerbs.set(вымолачивать.name.text, вымолачивать);

export { вымолачивать };