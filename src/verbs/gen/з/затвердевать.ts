import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затвердевать: PerfectVerb = {
  name: Word('затвердевать', 9),
  singular1stPerson: Word('затвердеваю', 9),
  singular2ndPerson: Word('затвердеваешь', 9),
  singular3rdPerson: Word('затвердевает', 9),
  plural1stPerson: Word('затвердеваем', 9),
  plural2ndPerson: Word('затвердеваете', 9),
  plural3rdPerson: Word('затвердевают', 9),
  masculinePast: Word('затвердевал', 9),
  femininePast: Word('затвердевала', 9),
  neuterPast: Word('затвердевало', 9),
  pluralPast: Word('затвердевали', 9),
  imperativeInformal: Word('затвердевай', 9),
  imperativeFormal: Word('затвердевайте', 9),
  imperfect: [],
};

perfectVerbs.set(затвердевать.name.text, затвердевать);

export { затвердевать };