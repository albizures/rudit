import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выклевать: PerfectVerb = {
  name: Word('выклевать', 1),
  singular1stPerson: Word('выклюю', 1),
  singular2ndPerson: Word('выклюешь', 1),
  singular3rdPerson: Word('выклюет', 1),
  plural1stPerson: Word('выклюем', 1),
  plural2ndPerson: Word('выклюете', 1),
  plural3rdPerson: Word('выклюют', 1),
  masculinePast: Word('выклевал', 1),
  femininePast: Word('выклевала', 1),
  neuterPast: Word('выклевало', 1),
  pluralPast: Word('выклевали', 1),
  imperativeInformal: Word('выклюй', 1),
  imperativeFormal: Word('выклюйте', 1),
  imperfect: [],
};

perfectVerbs.set(выклевать.name.text, выклевать);

export { выклевать };