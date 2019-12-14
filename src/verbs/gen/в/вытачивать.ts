import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вытачивать: PerfectVerb = {
  name: Word('вытачивать', 3),
  singular1stPerson: Word('вытачиваю', 3),
  singular2ndPerson: Word('вытачиваешь', 3),
  singular3rdPerson: Word('вытачивает', 3),
  plural1stPerson: Word('вытачиваем', 3),
  plural2ndPerson: Word('вытачиваете', 3),
  plural3rdPerson: Word('вытачивают', 3),
  masculinePast: Word('вытачивал', 3),
  femininePast: Word('вытачивала', 3),
  neuterPast: Word('вытачивало', 3),
  pluralPast: Word('вытачивали', 3),
  imperativeInformal: Word('вытачивай', 3),
  imperativeFormal: Word('вытачивайте', 3),
  imperfect: [],
};

perfectVerbs.set(вытачивать.name.text, вытачивать);

export { вытачивать };