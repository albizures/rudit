import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подпоясать: PerfectVerb = {
  name: Word('подпоясать', 5),
  singular1stPerson: Word('подпояшу', 5),
  singular2ndPerson: Word('подпояшешь', 5),
  singular3rdPerson: Word('подпояшет', 5),
  plural1stPerson: Word('подпояшем', 5),
  plural2ndPerson: Word('подпояшете', 5),
  plural3rdPerson: Word('подпояшут', 5),
  masculinePast: Word('подпоясал', 5),
  femininePast: Word('подпоясала', 5),
  neuterPast: Word('подпоясало', 5),
  pluralPast: Word('подпоясали', 5),
  imperativeInformal: Word('подпояшь', 5),
  imperativeFormal: Word('подпояшьте', 5),
  imperfect: [],
};

perfectVerbs.set(подпоясать.name.text, подпоясать);

export { подпоясать };