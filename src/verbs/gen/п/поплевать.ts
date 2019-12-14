import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поплевать: PerfectVerb = {
  name: Word('поплевать', 6),
  singular1stPerson: Word('поплюю', 5),
  singular2ndPerson: Word('поплюёшь', 4),
  singular3rdPerson: Word('поплюёт', 4),
  plural1stPerson: Word('поплюём', 4),
  plural2ndPerson: Word('поплюёте', 7),
  plural3rdPerson: Word('поплюют', 5),
  masculinePast: Word('поплевал', 6),
  femininePast: Word('поплевала', 6),
  neuterPast: Word('поплевало', 6),
  pluralPast: Word('поплевали', 6),
  imperativeInformal: Word('поплюй', 4),
  imperativeFormal: Word('поплюйте', 4),
  imperfect: [],
};

perfectVerbs.set(поплевать.name.text, поплевать);

export { поплевать };