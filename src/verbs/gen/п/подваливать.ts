import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подваливать: PerfectVerb = {
  name: Word('подваливать', 4),
  singular1stPerson: Word('подваливаю', 4),
  singular2ndPerson: Word('подваливаешь', 4),
  singular3rdPerson: Word('подваливает', 4),
  plural1stPerson: Word('подваливаем', 4),
  plural2ndPerson: Word('подваливаете', 4),
  plural3rdPerson: Word('подваливают', 4),
  masculinePast: Word('подваливал', 4),
  femininePast: Word('подваливала', 4),
  neuterPast: Word('подваливало', 4),
  pluralPast: Word('подваливали', 4),
  imperativeInformal: Word('подваливай', 4),
  imperativeFormal: Word('подваливайте', 4),
  imperfect: [],
};

perfectVerbs.set(подваливать.name.text, подваливать);

export { подваливать };