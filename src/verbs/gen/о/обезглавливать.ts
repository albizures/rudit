import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обезглавливать: PerfectVerb = {
  name: Word('обезглавливать', 6),
  singular1stPerson: Word('обезглавливаю', 6),
  singular2ndPerson: Word('обезглавливаешь', 6),
  singular3rdPerson: Word('обезглавливает', 6),
  plural1stPerson: Word('обезглавливаем', 6),
  plural2ndPerson: Word('обезглавливаете', 6),
  plural3rdPerson: Word('обезглавливают', 6),
  masculinePast: Word('обезглавливал', 6),
  femininePast: Word('обезглавливала', 6),
  neuterPast: Word('обезглавливало', 6),
  pluralPast: Word('обезглавливали', 6),
  imperativeInformal: Word('обезглавливай', 6),
  imperativeFormal: Word('обезглавливайте', 6),
  imperfect: [],
};

perfectVerbs.set(обезглавливать.name.text, обезглавливать);

export { обезглавливать };