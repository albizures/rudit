import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вылечивать: PerfectVerb = {
  name: Word('вылечивать', 3),
  singular1stPerson: Word('вылечиваю', 3),
  singular2ndPerson: Word('вылечиваешь', 3),
  singular3rdPerson: Word('вылечивает', 3),
  plural1stPerson: Word('вылечиваем', 3),
  plural2ndPerson: Word('вылечиваете', 3),
  plural3rdPerson: Word('вылечивают', 3),
  masculinePast: Word('вылечивал', 3),
  femininePast: Word('вылечивала', 3),
  neuterPast: Word('вылечивало', 3),
  pluralPast: Word('вылечивали', 3),
  imperativeInformal: Word('вылечивай', 3),
  imperativeFormal: Word('вылечивайте', 3),
  imperfect: [],
};

perfectVerbs.set(вылечивать.name.text, вылечивать);

export { вылечивать };