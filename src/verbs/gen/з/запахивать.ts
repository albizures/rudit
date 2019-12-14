import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запахивать: PerfectVerb = {
  name: Word('запахивать', 3),
  singular1stPerson: Word('запахиваю', 3),
  singular2ndPerson: Word('запахиваешь', 3),
  singular3rdPerson: Word('запахивает', 3),
  plural1stPerson: Word('запахиваем', 3),
  plural2ndPerson: Word('запахиваете', 3),
  plural3rdPerson: Word('запахивают', 3),
  masculinePast: Word('запахивал', 3),
  femininePast: Word('запахивала', 3),
  neuterPast: Word('запахивало', 3),
  pluralPast: Word('запахивали', 3),
  imperativeInformal: Word('запахивай', 3),
  imperativeFormal: Word('запахивайте', 3),
  imperfect: [],
};

perfectVerbs.set(запахивать.name.text, запахивать);

export { запахивать };