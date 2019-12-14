import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const облицевать: PerfectVerb = {
  name: Word('облицевать', 7),
  singular1stPerson: Word('облицую', 5),
  singular2ndPerson: Word('облицуешь', 5),
  singular3rdPerson: Word('облицует', 5),
  plural1stPerson: Word('облицуем', 5),
  plural2ndPerson: Word('облицуете', 5),
  plural3rdPerson: Word('облицуют', 5),
  masculinePast: Word('облицевал', 7),
  femininePast: Word('облицевала', 7),
  neuterPast: Word('облицевало', 7),
  pluralPast: Word('облицевали', 7),
  imperativeInformal: Word('облицуй', 5),
  imperativeFormal: Word('облицуйте', 5),
  imperfect: [],
};

perfectVerbs.set(облицевать.name.text, облицевать);

export { облицевать };