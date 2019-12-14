import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запевать: PerfectVerb = {
  name: Word('запевать', 5),
  singular1stPerson: Word('запеваю', 5),
  singular2ndPerson: Word('запеваешь', 5),
  singular3rdPerson: Word('запевает', 5),
  plural1stPerson: Word('запеваем', 5),
  plural2ndPerson: Word('запеваете', 5),
  plural3rdPerson: Word('запевают', 5),
  masculinePast: Word('запевал', 5),
  femininePast: Word('запевала', 5),
  neuterPast: Word('запевало', 5),
  pluralPast: Word('запевали', 5),
  imperativeInformal: Word('запевай', 5),
  imperativeFormal: Word('запевайте', 5),
  imperfect: [],
};

perfectVerbs.set(запевать.name.text, запевать);

export { запевать };