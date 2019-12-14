import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подломать: PerfectVerb = {
  name: Word('подломать', 6),
  singular1stPerson: Word('подломаю', 6),
  singular2ndPerson: Word('подломаешь', 6),
  singular3rdPerson: Word('подломает', 6),
  plural1stPerson: Word('подломаем', 6),
  plural2ndPerson: Word('подломаете', 6),
  plural3rdPerson: Word('подломают', 6),
  masculinePast: Word('подломал', 6),
  femininePast: Word('подломала', 6),
  neuterPast: Word('подломало', 6),
  pluralPast: Word('подломали', 6),
  imperativeInformal: Word('подломай', 6),
  imperativeFormal: Word('подломайте', 6),
  imperfect: [],
};

perfectVerbs.set(подломать.name.text, подломать);

export { подломать };