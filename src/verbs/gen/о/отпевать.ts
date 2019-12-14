import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отпевать: PerfectVerb = {
  name: Word('отпевать', 5),
  singular1stPerson: Word('отпеваю', 5),
  singular2ndPerson: Word('отпеваешь', 5),
  singular3rdPerson: Word('отпевает', 5),
  plural1stPerson: Word('отпеваем', 5),
  plural2ndPerson: Word('отпеваете', 5),
  plural3rdPerson: Word('отпевают', 5),
  masculinePast: Word('отпевал', 5),
  femininePast: Word('отпевала', 5),
  neuterPast: Word('отпевало', 5),
  pluralPast: Word('отпевали', 5),
  imperativeInformal: Word('отпевай', 5),
  imperativeFormal: Word('отпевайте', 5),
  imperfect: [],
};

perfectVerbs.set(отпевать.name.text, отпевать);

export { отпевать };