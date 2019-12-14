import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обуславливать: PerfectVerb = {
  name: Word('обуславливать', 5),
  singular1stPerson: Word('обуславливаю', 5),
  singular2ndPerson: Word('обуславливаешь', 5),
  singular3rdPerson: Word('обуславливает', 5),
  plural1stPerson: Word('обуславливаем', 5),
  plural2ndPerson: Word('обуславливаете', 5),
  plural3rdPerson: Word('обуславливают', 5),
  masculinePast: Word('обуславливал', 5),
  femininePast: Word('обуславливала', 5),
  neuterPast: Word('обуславливало', 5),
  pluralPast: Word('обуславливали', 5),
  imperativeInformal: Word('обуславливай', 5),
  imperativeFormal: Word('обуславливайте', 5),
  imperfect: [],
};

perfectVerbs.set(обуславливать.name.text, обуславливать);

export { обуславливать };