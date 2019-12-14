import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расклевать: PerfectVerb = {
  name: Word('расклевать', 7),
  singular1stPerson: Word('расклюю', 6),
  singular2ndPerson: Word('расклюёшь', 1),
  singular3rdPerson: Word('расклюёт', 1),
  plural1stPerson: Word('расклюём', 1),
  plural2ndPerson: Word('расклюёте', 1),
  plural3rdPerson: Word('расклюют', 6),
  masculinePast: Word('расклевал', 7),
  femininePast: Word('расклевала', 7),
  neuterPast: Word('расклевало', 7),
  pluralPast: Word('расклевали', 7),
  imperativeInformal: Word('расклюй', 5),
  imperativeFormal: Word('расклюйте', 5),
  imperfect: [],
};

perfectVerbs.set(расклевать.name.text, расклевать);

export { расклевать };