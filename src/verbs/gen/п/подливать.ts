import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подливать: PerfectVerb = {
  name: Word('подливать', 6),
  singular1stPerson: Word('подливаю', 6),
  singular2ndPerson: Word('подливаешь', 6),
  singular3rdPerson: Word('подливает', 6),
  plural1stPerson: Word('подливаем', 6),
  plural2ndPerson: Word('подливаете', 6),
  plural3rdPerson: Word('подливают', 6),
  masculinePast: Word('подливал', 6),
  femininePast: Word('подливала', 6),
  neuterPast: Word('подливало', 6),
  pluralPast: Word('подливали', 6),
  imperativeInformal: Word('подливай', 6),
  imperativeFormal: Word('подливайте', 6),
  imperfect: [],
};

perfectVerbs.set(подливать.name.text, подливать);

export { подливать };