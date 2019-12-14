import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вытаскивать: PerfectVerb = {
  name: Word('вытаскивать', 3),
  singular1stPerson: Word('вытаскиваю', 3),
  singular2ndPerson: Word('вытаскиваешь', 3),
  singular3rdPerson: Word('вытаскивает', 3),
  plural1stPerson: Word('вытаскиваем', 3),
  plural2ndPerson: Word('вытаскиваете', 3),
  plural3rdPerson: Word('вытаскивают', 3),
  masculinePast: Word('вытаскивал', 3),
  femininePast: Word('вытаскивала', 3),
  neuterPast: Word('вытаскивало', 3),
  pluralPast: Word('вытаскивали', 3),
  imperativeInformal: Word('вытаскивай', 3),
  imperativeFormal: Word('вытаскивайте', 3),
  imperfect: [],
};

perfectVerbs.set(вытаскивать.name.text, вытаскивать);

export { вытаскивать };