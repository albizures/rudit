import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отпотевать: PerfectVerb = {
  name: Word('отпотевать', 7),
  singular1stPerson: Word('отпотеваю', 7),
  singular2ndPerson: Word('отпотеваешь', 7),
  singular3rdPerson: Word('отпотевает', 7),
  plural1stPerson: Word('отпотеваем', 7),
  plural2ndPerson: Word('отпотеваете', 7),
  plural3rdPerson: Word('отпотевают', 7),
  masculinePast: Word('отпотевал', 7),
  femininePast: Word('отпотевала', 7),
  neuterPast: Word('отпотевало', 7),
  pluralPast: Word('отпотевали', 7),
  imperativeInformal: Word('отпотевай', 7),
  imperativeFormal: Word('отпотевайте', 7),
  imperfect: [],
};

perfectVerbs.set(отпотевать.name.text, отпотевать);

export { отпотевать };