import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const исклевать: PerfectVerb = {
  name: Word('исклевать', 6),
  singular1stPerson: Word('исклюю', 5),
  singular2ndPerson: Word('исклюёшь', 4),
  singular3rdPerson: Word('исклюёт', 4),
  plural1stPerson: Word('исклюём', 4),
  plural2ndPerson: Word('исклюёте', 7),
  plural3rdPerson: Word('исклюют', 5),
  masculinePast: Word('исклевал', 6),
  femininePast: Word('исклевала', 6),
  neuterPast: Word('исклевало', 6),
  pluralPast: Word('исклевали', 6),
  imperativeInformal: Word('исклюй', 4),
  imperativeFormal: Word('исклюйте', 4),
  imperfect: [],
};

perfectVerbs.set(исклевать.name.text, исклевать);

export { исклевать };