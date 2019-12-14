import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const межевать: PerfectVerb = {
  name: Word('межевать', 5),
  singular1stPerson: Word('межую', 3),
  singular2ndPerson: Word('межуешь', 3),
  singular3rdPerson: Word('межует', 3),
  plural1stPerson: Word('межуем', 3),
  plural2ndPerson: Word('межуете', 3),
  plural3rdPerson: Word('межуют', 3),
  masculinePast: Word('межевал', 5),
  femininePast: Word('межевала', 5),
  neuterPast: Word('межевало', 5),
  pluralPast: Word('межевали', 5),
  imperativeInformal: Word('межуй', 3),
  imperativeFormal: Word('межуйте', 3),
  imperfect: [],
};

perfectVerbs.set(межевать.name.text, межевать);

export { межевать };