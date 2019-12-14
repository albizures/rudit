import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const преодолевать: PerfectVerb = {
  name: Word('преодолевать', 9),
  singular1stPerson: Word('преодолеваю', 9),
  singular2ndPerson: Word('преодолеваешь', 9),
  singular3rdPerson: Word('преодолевает', 9),
  plural1stPerson: Word('преодолеваем', 9),
  plural2ndPerson: Word('преодолеваете', 9),
  plural3rdPerson: Word('преодолевают', 9),
  masculinePast: Word('преодолевал', 9),
  femininePast: Word('преодолевала', 9),
  neuterPast: Word('преодолевало', 9),
  pluralPast: Word('преодолевали', 9),
  imperativeInformal: Word('преодолевай', 9),
  imperativeFormal: Word('преодолевайте', 9),
  imperfect: [],
};

perfectVerbs.set(преодолевать.name.text, преодолевать);

export { преодолевать };