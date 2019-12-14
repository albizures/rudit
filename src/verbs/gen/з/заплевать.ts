import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заплевать: PerfectVerb = {
  name: Word('заплевать', 6),
  singular1stPerson: Word('заплюю', 5),
  singular2ndPerson: Word('заплюёшь', 5),
  singular3rdPerson: Word('заплюёт', 5),
  plural1stPerson: Word('заплюём', 5),
  plural2ndPerson: Word('заплюёте', 5),
  plural3rdPerson: Word('заплюют', 5),
  masculinePast: Word('заплевал', 6),
  femininePast: Word('заплевала', 6),
  neuterPast: Word('заплевало', 6),
  pluralPast: Word('заплевали', 6),
  imperativeInformal: Word('заплюй', 4),
  imperativeFormal: Word('заплюйте', 4),
  imperfect: [],
};

perfectVerbs.set(заплевать.name.text, заплевать);

export { заплевать };