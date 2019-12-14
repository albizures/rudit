import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кочевать: PerfectVerb = {
  name: Word('кочевать', 5),
  singular1stPerson: Word('кочую', 3),
  singular2ndPerson: Word('кочуешь', 3),
  singular3rdPerson: Word('кочует', 3),
  plural1stPerson: Word('кочуем', 3),
  plural2ndPerson: Word('кочуете', 3),
  plural3rdPerson: Word('кочуют', 3),
  masculinePast: Word('кочевал', 5),
  femininePast: Word('кочевала', 5),
  neuterPast: Word('кочевало', 5),
  pluralPast: Word('кочевали', 5),
  imperativeInformal: Word('кочуй', 3),
  imperativeFormal: Word('кочуйте', 3),
  imperfect: [],
};

perfectVerbs.set(кочевать.name.text, кочевать);

export { кочевать };