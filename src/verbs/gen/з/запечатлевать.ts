import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запечатлевать: PerfectVerb = {
  name: Word('запечатлевать', 10),
  singular1stPerson: Word('запечатлеваю', 10),
  singular2ndPerson: Word('запечатлеваешь', 10),
  singular3rdPerson: Word('запечатлевает', 10),
  plural1stPerson: Word('запечатлеваем', 10),
  plural2ndPerson: Word('запечатлеваете', 10),
  plural3rdPerson: Word('запечатлевают', 10),
  masculinePast: Word('запечатлевал', 10),
  femininePast: Word('запечатлевала', 10),
  neuterPast: Word('запечатлевало', 10),
  pluralPast: Word('запечатлевали', 10),
  imperativeInformal: Word('запечатлевай', 10),
  imperativeFormal: Word('запечатлевайте', 10),
  imperfect: [],
};

perfectVerbs.set(запечатлевать.name.text, запечатлевать);

export { запечатлевать };