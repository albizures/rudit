import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выдавливать: PerfectVerb = {
  name: Word('выдавливать', 3),
  singular1stPerson: Word('выдавливаю', 3),
  singular2ndPerson: Word('выдавливаешь', 3),
  singular3rdPerson: Word('выдавливает', 3),
  plural1stPerson: Word('выдавливаем', 3),
  plural2ndPerson: Word('выдавливаете', 3),
  plural3rdPerson: Word('выдавливают', 3),
  masculinePast: Word('выдавливал', 3),
  femininePast: Word('выдавливала', 3),
  neuterPast: Word('выдавливало', 3),
  pluralPast: Word('выдавливали', 3),
  imperativeInformal: Word('выдавливай', 3),
  imperativeFormal: Word('выдавливайте', 3),
  imperfect: [],
};

perfectVerbs.set(выдавливать.name.text, выдавливать);

export { выдавливать };