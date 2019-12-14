import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вышагивать: PerfectVerb = {
  name: Word('вышагивать', 3),
  singular1stPerson: Word('вышагиваю', 3),
  singular2ndPerson: Word('вышагиваешь', 3),
  singular3rdPerson: Word('вышагивает', 3),
  plural1stPerson: Word('вышагиваем', 3),
  plural2ndPerson: Word('вышагиваете', 3),
  plural3rdPerson: Word('вышагивают', 3),
  masculinePast: Word('вышагивал', 3),
  femininePast: Word('вышагивала', 3),
  neuterPast: Word('вышагивало', 3),
  pluralPast: Word('вышагивали', 3),
  imperativeInformal: Word('вышагивай', 3),
  imperativeFormal: Word('вышагивайте', 3),
  imperfect: [],
};

perfectVerbs.set(вышагивать.name.text, вышагивать);

export { вышагивать };