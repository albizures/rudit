import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обезземеливать: PerfectVerb = {
  name: Word('обезземеливать', 7),
  singular1stPerson: Word('обезземеливаю', 7),
  singular2ndPerson: Word('обезземеливаешь', 7),
  singular3rdPerson: Word('обезземеливает', 7),
  plural1stPerson: Word('обезземеливаем', 7),
  plural2ndPerson: Word('обезземеливаете', 7),
  plural3rdPerson: Word('обезземеливают', 7),
  masculinePast: Word('обезземеливал', 7),
  femininePast: Word('обезземеливала', 7),
  neuterPast: Word('обезземеливало', 7),
  pluralPast: Word('обезземеливали', 7),
  imperativeInformal: Word('обезземеливай', 7),
  imperativeFormal: Word('обезземеливайте', 7),
  imperfect: [],
};

perfectVerbs.set(обезземеливать.name.text, обезземеливать);

export { обезземеливать };