import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const горевать: PerfectVerb = {
  name: Word('горевать', 5),
  singular1stPerson: Word('горюю', 3),
  singular2ndPerson: Word('горюешь', 3),
  singular3rdPerson: Word('горюет', 3),
  plural1stPerson: Word('горюем', 3),
  plural2ndPerson: Word('горюете', 3),
  plural3rdPerson: Word('горюют', 3),
  masculinePast: Word('горевал', 5),
  femininePast: Word('горевала', 5),
  neuterPast: Word('горевало', 5),
  pluralPast: Word('горевали', 5),
  imperativeInformal: Word('горюй', 3),
  imperativeFormal: Word('горюйте', 3),
  imperfect: [],
};

perfectVerbs.set(горевать.name.text, горевать);

export { горевать };