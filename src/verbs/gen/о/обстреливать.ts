import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обстреливать: PerfectVerb = {
  name: Word('обстреливать', 5),
  singular1stPerson: Word('обстреливаю', 5),
  singular2ndPerson: Word('обстреливаешь', 5),
  singular3rdPerson: Word('обстреливает', 5),
  plural1stPerson: Word('обстреливаем', 5),
  plural2ndPerson: Word('обстреливаете', 5),
  plural3rdPerson: Word('обстреливают', 5),
  masculinePast: Word('обстреливал', 5),
  femininePast: Word('обстреливала', 5),
  neuterPast: Word('обстреливало', 5),
  pluralPast: Word('обстреливали', 5),
  imperativeInformal: Word('обстреливай', 5),
  imperativeFormal: Word('обстреливайте', 5),
  imperfect: [],
};

perfectVerbs.set(обстреливать.name.text, обстреливать);

export { обстреливать };