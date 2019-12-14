import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разевать: PerfectVerb = {
  name: Word('разевать', 5),
  singular1stPerson: Word('разеваю', 5),
  singular2ndPerson: Word('разеваешь', 5),
  singular3rdPerson: Word('разевает', 5),
  plural1stPerson: Word('разеваем', 5),
  plural2ndPerson: Word('разеваете', 5),
  plural3rdPerson: Word('разевают', 5),
  masculinePast: Word('разевал', 5),
  femininePast: Word('разевала', 5),
  neuterPast: Word('разевало', 5),
  pluralPast: Word('разевали', 5),
  imperativeInformal: Word('разевай', 5),
  imperativeFormal: Word('разевайте', 5),
  imperfect: [],
};

perfectVerbs.set(разевать.name.text, разевать);

export { разевать };