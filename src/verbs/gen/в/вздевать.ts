import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вздевать: PerfectVerb = {
  name: Word('вздевать', 5),
  singular1stPerson: Word('вздеваю', 5),
  singular2ndPerson: Word('вздеваешь', 5),
  singular3rdPerson: Word('вздевает', 5),
  plural1stPerson: Word('вздеваем', 5),
  plural2ndPerson: Word('вздеваете', 5),
  plural3rdPerson: Word('вздевают', 5),
  masculinePast: Word('вздевал', 5),
  femininePast: Word('вздевала', 5),
  neuterPast: Word('вздевало', 5),
  pluralPast: Word('вздевали', 5),
  imperativeInformal: Word('вздевай', 5),
  imperativeFormal: Word('вздевайте', 5),
  imperfect: [],
};

perfectVerbs.set(вздевать.name.text, вздевать);

export { вздевать };