import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const врачевать: PerfectVerb = {
  name: Word('врачевать', 6),
  singular1stPerson: Word('врачую', 4),
  singular2ndPerson: Word('врачуешь', 4),
  singular3rdPerson: Word('врачует', 4),
  plural1stPerson: Word('врачуем', 4),
  plural2ndPerson: Word('врачуете', 4),
  plural3rdPerson: Word('врачуют', 4),
  masculinePast: Word('врачевал', 6),
  femininePast: Word('врачевала', 6),
  neuterPast: Word('врачевало', 6),
  pluralPast: Word('врачевали', 6),
  imperativeInformal: Word('врачуй', 4),
  imperativeFormal: Word('врачуйте', 4),
  imperfect: [],
};

perfectVerbs.set(врачевать.name.text, врачевать);

export { врачевать };