import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вымахивать: PerfectVerb = {
  name: Word('вымахивать', 3),
  singular1stPerson: Word('вымахиваю', 3),
  singular2ndPerson: Word('вымахиваешь', 3),
  singular3rdPerson: Word('вымахивает', 3),
  plural1stPerson: Word('вымахиваем', 3),
  plural2ndPerson: Word('вымахиваете', 3),
  plural3rdPerson: Word('вымахивают', 3),
  masculinePast: Word('вымахивал', 3),
  femininePast: Word('вымахивала', 3),
  neuterPast: Word('вымахивало', 3),
  pluralPast: Word('вымахивали', 3),
  imperativeInformal: Word('вымахивай', 3),
  imperativeFormal: Word('вымахивайте', 3),
  imperfect: [],
};

perfectVerbs.set(вымахивать.name.text, вымахивать);

export { вымахивать };