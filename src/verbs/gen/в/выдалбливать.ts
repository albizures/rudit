import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выдалбливать: PerfectVerb = {
  name: Word('выдалбливать', 3),
  singular1stPerson: Word('выдалбливаю', 3),
  singular2ndPerson: Word('выдалбливаешь', 3),
  singular3rdPerson: Word('выдалбливает', 3),
  plural1stPerson: Word('выдалбливаем', 3),
  plural2ndPerson: Word('выдалбливаете', 3),
  plural3rdPerson: Word('выдалбливают', 3),
  masculinePast: Word('выдалбливал', 3),
  femininePast: Word('выдалбливала', 3),
  neuterPast: Word('выдалбливало', 3),
  pluralPast: Word('выдалбливали', 3),
  imperativeInformal: Word('выдалбливай', 3),
  imperativeFormal: Word('выдалбливайте', 3),
  imperfect: [],
};

perfectVerbs.set(выдалбливать.name.text, выдалбливать);

export { выдалбливать };