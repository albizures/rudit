import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обливать: PerfectVerb = {
  name: Word('обливать', 5),
  singular1stPerson: Word('обливаю', 5),
  singular2ndPerson: Word('обливаешь', 5),
  singular3rdPerson: Word('обливает', 5),
  plural1stPerson: Word('обливаем', 5),
  plural2ndPerson: Word('обливаете', 5),
  plural3rdPerson: Word('обливают', 5),
  masculinePast: Word('обливал', 5),
  femininePast: Word('обливала', 5),
  neuterPast: Word('обливало', 5),
  pluralPast: Word('обливали', 5),
  imperativeInformal: Word('обливай', 5),
  imperativeFormal: Word('обливайте', 5),
  imperfect: [],
};

perfectVerbs.set(обливать.name.text, обливать);

export { обливать };