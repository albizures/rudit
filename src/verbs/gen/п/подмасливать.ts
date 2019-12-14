import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подмасливать: PerfectVerb = {
  name: Word('подмасливать', 4),
  singular1stPerson: Word('подмасливаю', 4),
  singular2ndPerson: Word('подмасливаешь', 4),
  singular3rdPerson: Word('подмасливает', 4),
  plural1stPerson: Word('подмасливаем', 4),
  plural2ndPerson: Word('подмасливаете', 4),
  plural3rdPerson: Word('подмасливают', 4),
  masculinePast: Word('подмасливал', 4),
  femininePast: Word('подмасливала', 4),
  neuterPast: Word('подмасливало', 4),
  pluralPast: Word('подмасливали', 4),
  imperativeInformal: Word('подмасливай', 4),
  imperativeFormal: Word('подмасливайте', 4),
  imperfect: [],
};

perfectVerbs.set(подмасливать.name.text, подмасливать);

export { подмасливать };