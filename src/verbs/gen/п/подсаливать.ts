import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подсаливать: PerfectVerb = {
  name: Word('подсаливать', 4),
  singular1stPerson: Word('подсаливаю', 4),
  singular2ndPerson: Word('подсаливаешь', 4),
  singular3rdPerson: Word('подсаливает', 4),
  plural1stPerson: Word('подсаливаем', 4),
  plural2ndPerson: Word('подсаливаете', 4),
  plural3rdPerson: Word('подсаливают', 4),
  masculinePast: Word('подсаливал', 4),
  femininePast: Word('подсаливала', 4),
  neuterPast: Word('подсаливало', 4),
  pluralPast: Word('подсаливали', 4),
  imperativeInformal: Word('подсаливай', 4),
  imperativeFormal: Word('подсаливайте', 4),
  imperfect: [],
};

perfectVerbs.set(подсаливать.name.text, подсаливать);

export { подсаливать };