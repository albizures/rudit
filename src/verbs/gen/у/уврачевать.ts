import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уврачевать: PerfectVerb = {
  name: Word('уврачевать', 7),
  singular1stPerson: Word('уврачую', 5),
  singular2ndPerson: Word('уврачуешь', 5),
  singular3rdPerson: Word('уврачует', 5),
  plural1stPerson: Word('уврачуем', 5),
  plural2ndPerson: Word('уврачуете', 5),
  plural3rdPerson: Word('уврачуют', 5),
  masculinePast: Word('уврачевал', 7),
  femininePast: Word('уврачевала', 7),
  neuterPast: Word('уврачевало', 7),
  pluralPast: Word('уврачевали', 7),
  imperativeInformal: Word('уврачуй', 5),
  imperativeFormal: Word('уврачуйте', 5),
  imperfect: [],
};

perfectVerbs.set(уврачевать.name.text, уврачевать);

export { уврачевать };