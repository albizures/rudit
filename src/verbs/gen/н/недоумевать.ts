import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const недоумевать: PerfectVerb = {
  name: Word('недоумевать', 8),
  singular1stPerson: Word('недоумеваю', 8),
  singular2ndPerson: Word('недоумеваешь', 8),
  singular3rdPerson: Word('недоумевает', 8),
  plural1stPerson: Word('недоумеваем', 8),
  plural2ndPerson: Word('недоумеваете', 8),
  plural3rdPerson: Word('недоумевают', 8),
  masculinePast: Word('недоумевал', 8),
  femininePast: Word('недоумевала', 8),
  neuterPast: Word('недоумевало', 8),
  pluralPast: Word('недоумевали', 8),
  imperativeInformal: Word('недоумевай', 8),
  imperativeFormal: Word('недоумевайте', 8),
  imperfect: [],
};

perfectVerbs.set(недоумевать.name.text, недоумевать);

export { недоумевать };