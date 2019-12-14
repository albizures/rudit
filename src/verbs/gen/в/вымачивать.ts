import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вымачивать: PerfectVerb = {
  name: Word('вымачивать', 3),
  singular1stPerson: Word('вымачиваю', 3),
  singular2ndPerson: Word('вымачиваешь', 3),
  singular3rdPerson: Word('вымачивает', 3),
  plural1stPerson: Word('вымачиваем', 3),
  plural2ndPerson: Word('вымачиваете', 3),
  plural3rdPerson: Word('вымачивают', 3),
  masculinePast: Word('вымачивал', 3),
  femininePast: Word('вымачивала', 3),
  neuterPast: Word('вымачивало', 3),
  pluralPast: Word('вымачивали', 3),
  imperativeInformal: Word('вымачивай', 3),
  imperativeFormal: Word('вымачивайте', 3),
  imperfect: [],
};

perfectVerbs.set(вымачивать.name.text, вымачивать);

export { вымачивать };