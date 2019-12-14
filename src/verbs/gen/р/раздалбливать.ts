import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раздалбливать: PerfectVerb = {
  name: Word('раздалбливать', 4),
  singular1stPerson: Word('раздалбливаю', 4),
  singular2ndPerson: Word('раздалбливаешь', 4),
  singular3rdPerson: Word('раздалбливает', 4),
  plural1stPerson: Word('раздалбливаем', 4),
  plural2ndPerson: Word('раздалбливаете', 4),
  plural3rdPerson: Word('раздалбливают', 4),
  masculinePast: Word('раздалбливал', 4),
  femininePast: Word('раздалбливала', 4),
  neuterPast: Word('раздалбливало', 4),
  pluralPast: Word('раздалбливали', 4),
  imperativeInformal: Word('раздалбливай', 4),
  imperativeFormal: Word('раздалбливайте', 4),
  imperfect: [],
};

perfectVerbs.set(раздалбливать.name.text, раздалбливать);

export { раздалбливать };