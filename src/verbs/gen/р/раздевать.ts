import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раздевать: PerfectVerb = {
  name: Word('раздевать', 6),
  singular1stPerson: Word('раздеваю', 6),
  singular2ndPerson: Word('раздеваешь', 6),
  singular3rdPerson: Word('раздевает', 6),
  plural1stPerson: Word('раздеваем', 6),
  plural2ndPerson: Word('раздеваете', 6),
  plural3rdPerson: Word('раздевают', 6),
  masculinePast: Word('раздевал', 6),
  femininePast: Word('раздевала', 6),
  neuterPast: Word('раздевало', 6),
  pluralPast: Word('раздевали', 6),
  imperativeInformal: Word('раздевай', 6),
  imperativeFormal: Word('раздевайте', 6),
  imperfect: ['раздеть'],
};

perfectVerbs.set(раздевать.name.text, раздевать);

export { раздевать };