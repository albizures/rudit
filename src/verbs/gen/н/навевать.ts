import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const навевать: PerfectVerb = {
  name: Word('навевать', 5),
  singular1stPerson: Word('навеваю', 5),
  singular2ndPerson: Word('навеваешь', 5),
  singular3rdPerson: Word('навевает', 5),
  plural1stPerson: Word('навеваем', 5),
  plural2ndPerson: Word('навеваете', 5),
  plural3rdPerson: Word('навевают', 5),
  masculinePast: Word('навевал', 5),
  femininePast: Word('навевала', 5),
  neuterPast: Word('навевало', 5),
  pluralPast: Word('навевали', 5),
  imperativeInformal: Word('навевай', 5),
  imperativeFormal: Word('навевайте', 5),
  imperfect: [],
};

perfectVerbs.set(навевать.name.text, навевать);

export { навевать };