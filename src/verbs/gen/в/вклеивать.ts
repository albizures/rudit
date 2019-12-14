import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вклеивать: PerfectVerb = {
  name: Word('вклеивать', 3),
  singular1stPerson: Word('вклеиваю', 3),
  singular2ndPerson: Word('вклеиваешь', 3),
  singular3rdPerson: Word('вклеивает', 3),
  plural1stPerson: Word('вклеиваем', 3),
  plural2ndPerson: Word('вклеиваете', 3),
  plural3rdPerson: Word('вклеивают', 3),
  masculinePast: Word('вклеивал', 3),
  femininePast: Word('вклеивала', 3),
  neuterPast: Word('вклеивало', 3),
  pluralPast: Word('вклеивали', 3),
  imperativeInformal: Word('вклеивай', 3),
  imperativeFormal: Word('вклеивайте', 3),
  imperfect: [],
};

perfectVerbs.set(вклеивать.name.text, вклеивать);

export { вклеивать };