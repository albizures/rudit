import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подкармливать: PerfectVerb = {
  name: Word('подкармливать', 4),
  singular1stPerson: Word('подкармливаю', 4),
  singular2ndPerson: Word('подкармливаешь', 4),
  singular3rdPerson: Word('подкармливает', 4),
  plural1stPerson: Word('подкармливаем', 4),
  plural2ndPerson: Word('подкармливаете', 4),
  plural3rdPerson: Word('подкармливают', 4),
  masculinePast: Word('подкармливал', 4),
  femininePast: Word('подкармливала', 4),
  neuterPast: Word('подкармливало', 4),
  pluralPast: Word('подкармливали', 4),
  imperativeInformal: Word('подкармливай', 4),
  imperativeFormal: Word('подкармливайте', 4),
  imperfect: [],
};

perfectVerbs.set(подкармливать.name.text, подкармливать);

export { подкармливать };