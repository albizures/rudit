import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обваливать: PerfectVerb = {
  name: Word('обваливать', 3),
  singular1stPerson: Word('обваливаю', 3),
  singular2ndPerson: Word('обваливаешь', 3),
  singular3rdPerson: Word('обваливает', 3),
  plural1stPerson: Word('обваливаем', 3),
  plural2ndPerson: Word('обваливаете', 3),
  plural3rdPerson: Word('обваливают', 3),
  masculinePast: Word('обваливал', 3),
  femininePast: Word('обваливала', 3),
  neuterPast: Word('обваливало', 3),
  pluralPast: Word('обваливали', 3),
  imperativeInformal: Word('обваливай', 3),
  imperativeFormal: Word('обваливайте', 3),
  imperfect: [],
};

perfectVerbs.set(обваливать.name.text, обваливать);

export { обваливать };