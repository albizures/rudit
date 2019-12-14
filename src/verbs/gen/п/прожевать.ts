import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прожевать: PerfectVerb = {
  name: Word('прожевать', 6),
  singular1stPerson: Word('прожую', 5),
  singular2ndPerson: Word('прожуёшь', 5),
  singular3rdPerson: Word('прожуёт', 5),
  plural1stPerson: Word('прожуём', 5),
  plural2ndPerson: Word('прожуёте', 5),
  plural3rdPerson: Word('прожуют', 5),
  masculinePast: Word('прожевал', 6),
  femininePast: Word('прожевала', 6),
  neuterPast: Word('прожевало', 6),
  pluralPast: Word('прожевали', 6),
  imperativeInformal: Word('прожуй', 4),
  imperativeFormal: Word('прожуйте', 4),
  imperfect: [],
};

perfectVerbs.set(прожевать.name.text, прожевать);

export { прожевать };