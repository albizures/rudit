import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лицевать: PerfectVerb = {
  name: Word('лицевать', 5),
  singular1stPerson: Word('лицую', 3),
  singular2ndPerson: Word('лицуешь', 3),
  singular3rdPerson: Word('лицует', 3),
  plural1stPerson: Word('лицуем', 3),
  plural2ndPerson: Word('лицуете', 3),
  plural3rdPerson: Word('лицуют', 3),
  masculinePast: Word('лицевал', 5),
  femininePast: Word('лицевала', 5),
  neuterPast: Word('лицевало', 5),
  pluralPast: Word('лицевали', 5),
  imperativeInformal: Word('лицуй', 3),
  imperativeFormal: Word('лицуйте', 3),
  imperfect: [],
};

perfectVerbs.set(лицевать.name.text, лицевать);

export { лицевать };