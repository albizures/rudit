import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обжуливать: PerfectVerb = {
  name: Word('обжуливать', 3),
  singular1stPerson: Word('обжуливаю', 3),
  singular2ndPerson: Word('обжуливаешь', 3),
  singular3rdPerson: Word('обжуливает', 3),
  plural1stPerson: Word('обжуливаем', 3),
  plural2ndPerson: Word('обжуливаете', 3),
  plural3rdPerson: Word('обжуливают', 3),
  masculinePast: Word('обжуливал', 3),
  femininePast: Word('обжуливала', 3),
  neuterPast: Word('обжуливало', 3),
  pluralPast: Word('обжуливали', 3),
  imperativeInformal: Word('обжуливай', 3),
  imperativeFormal: Word('обжуливайте', 3),
  imperfect: [],
};

perfectVerbs.set(обжуливать.name.text, обжуливать);

export { обжуливать };