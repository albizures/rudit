import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поклевать: PerfectVerb = {
  name: Word('поклевать', 6),
  singular1stPerson: Word('поклюю', 5),
  singular2ndPerson: Word('поклюёшь', 5),
  singular3rdPerson: Word('поклюёт', 5),
  plural1stPerson: Word('поклюём', 5),
  plural2ndPerson: Word('поклюёте', 5),
  plural3rdPerson: Word('поклюют', 5),
  masculinePast: Word('поклевал', 6),
  femininePast: Word('поклевала', 6),
  neuterPast: Word('поклевало', 6),
  pluralPast: Word('поклевали', 6),
  imperativeInformal: Word('поклюй', 4),
  imperativeFormal: Word('поклюйте', 4),
  imperfect: [],
};

perfectVerbs.set(поклевать.name.text, поклевать);

export { поклевать };