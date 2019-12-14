import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обусловливать: PerfectVerb = {
  name: Word('обусловливать', 5),
  singular1stPerson: Word('обусловливаю', 5),
  singular2ndPerson: Word('обусловливаешь', 5),
  singular3rdPerson: Word('обусловливает', 5),
  plural1stPerson: Word('обусловливаем', 5),
  plural2ndPerson: Word('обусловливаете', 5),
  plural3rdPerson: Word('обусловливают', 5),
  masculinePast: Word('обусловливал', 5),
  femininePast: Word('обусловливала', 5),
  neuterPast: Word('обусловливало', 5),
  pluralPast: Word('обусловливали', 5),
  imperativeInformal: Word('обусловливай', 5),
  imperativeFormal: Word('обусловливайте', 5),
  imperfect: [],
};

perfectVerbs.set(обусловливать.name.text, обусловливать);

export { обусловливать };