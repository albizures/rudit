import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обвевать: PerfectVerb = {
  name: Word('обвевать', 5),
  singular1stPerson: Word('обвеваю', 5),
  singular2ndPerson: Word('обвеваешь', 5),
  singular3rdPerson: Word('обвевает', 5),
  plural1stPerson: Word('обвеваем', 5),
  plural2ndPerson: Word('обвеваете', 5),
  plural3rdPerson: Word('обвевают', 5),
  masculinePast: Word('обвевал', 5),
  femininePast: Word('обвевала', 5),
  neuterPast: Word('обвевало', 5),
  pluralPast: Word('обвевали', 5),
  imperativeInformal: Word('обвевай', 5),
  imperativeFormal: Word('обвевайте', 5),
  imperfect: [],
};

perfectVerbs.set(обвевать.name.text, обвевать);

export { обвевать };