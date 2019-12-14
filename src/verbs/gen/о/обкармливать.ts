import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обкармливать: PerfectVerb = {
  name: Word('обкармливать', 3),
  singular1stPerson: Word('обкармливаю', 3),
  singular2ndPerson: Word('обкармливаешь', 3),
  singular3rdPerson: Word('обкармливает', 3),
  plural1stPerson: Word('обкармливаем', 3),
  plural2ndPerson: Word('обкармливаете', 3),
  plural3rdPerson: Word('обкармливают', 3),
  masculinePast: Word('обкармливал', 3),
  femininePast: Word('обкармливала', 3),
  neuterPast: Word('обкармливало', 3),
  pluralPast: Word('обкармливали', 3),
  imperativeInformal: Word('обкармливай', 3),
  imperativeFormal: Word('обкармливайте', 3),
  imperfect: [],
};

perfectVerbs.set(обкармливать.name.text, обкармливать);

export { обкармливать };