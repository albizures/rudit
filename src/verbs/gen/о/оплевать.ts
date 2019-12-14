import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оплевать: PerfectVerb = {
  name: Word('оплевать', 5),
  singular1stPerson: Word('оплюю', 4),
  singular2ndPerson: Word('оплюёшь', 3),
  singular3rdPerson: Word('оплюёт', 3),
  plural1stPerson: Word('оплюём', 3),
  plural2ndPerson: Word('оплюёте', 6),
  plural3rdPerson: Word('оплюют', 4),
  masculinePast: Word('оплевал', 5),
  femininePast: Word('оплевала', 5),
  neuterPast: Word('оплевало', 5),
  pluralPast: Word('оплевали', 5),
  imperativeInformal: Word('оплюй', 3),
  imperativeFormal: Word('оплюйте', 3),
  imperfect: [],
};

perfectVerbs.set(оплевать.name.text, оплевать);

export { оплевать };