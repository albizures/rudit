import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заклевать: PerfectVerb = {
  name: Word('заклевать', 6),
  singular1stPerson: Word('заклюю', 5),
  singular2ndPerson: Word('заклюёшь', 5),
  singular3rdPerson: Word('заклюёт', 5),
  plural1stPerson: Word('заклюём', 5),
  plural2ndPerson: Word('заклюёте', 5),
  plural3rdPerson: Word('заклюют', 5),
  masculinePast: Word('заклевал', 6),
  femininePast: Word('заклевала', 6),
  neuterPast: Word('заклевало', 6),
  pluralPast: Word('заклевали', 6),
  imperativeInformal: Word('заклюй', 4),
  imperativeFormal: Word('заклюйте', 4),
  imperfect: [],
};

perfectVerbs.set(заклевать.name.text, заклевать);

export { заклевать };