import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подготавливать: PerfectVerb = {
  name: Word('подготавливать', 6),
  singular1stPerson: Word('подготавливаю', 6),
  singular2ndPerson: Word('подготавливаешь', 6),
  singular3rdPerson: Word('подготавливает', 6),
  plural1stPerson: Word('подготавливаем', 6),
  plural2ndPerson: Word('подготавливаете', 6),
  plural3rdPerson: Word('подготавливают', 6),
  masculinePast: Word('подготавливал', 6),
  femininePast: Word('подготавливала', 6),
  neuterPast: Word('подготавливало', 6),
  pluralPast: Word('подготавливали', 6),
  imperativeInformal: Word('подготавливай', 6),
  imperativeFormal: Word('подготавливайте', 6),
  imperfect: [],
};

perfectVerbs.set(подготавливать.name.text, подготавливать);

export { подготавливать };