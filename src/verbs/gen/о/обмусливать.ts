import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обмусливать: PerfectVerb = {
  name: Word('обмусливать', 3),
  singular1stPerson: Word('обмусливаю', 3),
  singular2ndPerson: Word('обмусливаешь', 3),
  singular3rdPerson: Word('обмусливает', 3),
  plural1stPerson: Word('обмусливаем', 3),
  plural2ndPerson: Word('обмусливаете', 3),
  plural3rdPerson: Word('обмусливают', 3),
  masculinePast: Word('обмусливал', 3),
  femininePast: Word('обмусливала', 3),
  neuterPast: Word('обмусливало', 3),
  pluralPast: Word('обмусливали', 3),
  imperativeInformal: Word('обмусливай', 3),
  imperativeFormal: Word('обмусливайте', 3),
  imperfect: [],
};

perfectVerbs.set(обмусливать.name.text, обмусливать);

export { обмусливать };