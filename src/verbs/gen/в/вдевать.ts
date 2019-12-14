import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вдевать: PerfectVerb = {
  name: Word('вдевать', 4),
  singular1stPerson: Word('вдеваю', 4),
  singular2ndPerson: Word('вдеваешь', 4),
  singular3rdPerson: Word('вдевает', 4),
  plural1stPerson: Word('вдеваем', 4),
  plural2ndPerson: Word('вдеваете', 4),
  plural3rdPerson: Word('вдевают', 4),
  masculinePast: Word('вдевал', 4),
  femininePast: Word('вдевала', 4),
  neuterPast: Word('вдевало', 4),
  pluralPast: Word('вдевали', 4),
  imperativeInformal: Word('вдевай', 4),
  imperativeFormal: Word('вдевайте', 4),
  imperfect: [],
};

perfectVerbs.set(вдевать.name.text, вдевать);

export { вдевать };