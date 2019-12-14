import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выпевать: PerfectVerb = {
  name: Word('выпевать', 5),
  singular1stPerson: Word('выпеваю', 5),
  singular2ndPerson: Word('выпеваешь', 5),
  singular3rdPerson: Word('выпевает', 5),
  plural1stPerson: Word('выпеваем', 5),
  plural2ndPerson: Word('выпеваете', 5),
  plural3rdPerson: Word('выпевают', 5),
  masculinePast: Word('выпевал', 5),
  femininePast: Word('выпевала', 5),
  neuterPast: Word('выпевало', 5),
  pluralPast: Word('выпевали', 5),
  imperativeInformal: Word('выпевай', 5),
  imperativeFormal: Word('выпевайте', 5),
  imperfect: [],
};

perfectVerbs.set(выпевать.name.text, выпевать);

export { выпевать };