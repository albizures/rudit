import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помахивать: PerfectVerb = {
  name: Word('помахивать', 3),
  singular1stPerson: Word('помахиваю', 3),
  singular2ndPerson: Word('помахиваешь', 3),
  singular3rdPerson: Word('помахивает', 3),
  plural1stPerson: Word('помахиваем', 3),
  plural2ndPerson: Word('помахиваете', 3),
  plural3rdPerson: Word('помахивают', 3),
  masculinePast: Word('помахивал', 3),
  femininePast: Word('помахивала', 3),
  neuterPast: Word('помахивало', 3),
  pluralPast: Word('помахивали', 3),
  imperativeInformal: Word('помахивай', 3),
  imperativeFormal: Word('помахивайте', 3),
  imperfect: [],
};

perfectVerbs.set(помахивать.name.text, помахивать);

export { помахивать };