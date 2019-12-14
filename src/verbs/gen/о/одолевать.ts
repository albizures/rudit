import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const одолевать: PerfectVerb = {
  name: Word('одолевать', 6),
  singular1stPerson: Word('одолеваю', 6),
  singular2ndPerson: Word('одолеваешь', 6),
  singular3rdPerson: Word('одолевает', 6),
  plural1stPerson: Word('одолеваем', 6),
  plural2ndPerson: Word('одолеваете', 6),
  plural3rdPerson: Word('одолевают', 6),
  masculinePast: Word('одолевал', 6),
  femininePast: Word('одолевала', 6),
  neuterPast: Word('одолевало', 6),
  pluralPast: Word('одолевали', 6),
  imperativeInformal: Word('одолевай', 6),
  imperativeFormal: Word('одолевайте', 6),
  imperfect: [],
};

perfectVerbs.set(одолевать.name.text, одолевать);

export { одолевать };