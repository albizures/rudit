import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задевать: PerfectVerb = {
  name: Word('задевать', 5),
  singular1stPerson: Word('задеваю', 5),
  singular2ndPerson: Word('задеваешь', 5),
  singular3rdPerson: Word('задевает', 5),
  plural1stPerson: Word('задеваем', 5),
  plural2ndPerson: Word('задеваете', 5),
  plural3rdPerson: Word('задевают', 5),
  masculinePast: Word('задевал', 5),
  femininePast: Word('задевала', 5),
  neuterPast: Word('задевало', 5),
  pluralPast: Word('задевали', 5),
  imperativeInformal: Word('задевай', 5),
  imperativeFormal: Word('задевайте', 5),
  imperfect: [],
};

perfectVerbs.set(задевать.name.text, задевать);

export { задевать };