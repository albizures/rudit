import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потчевать: PerfectVerb = {
  name: Word('потчевать', 1),
  singular1stPerson: Word('потчую', 1),
  singular2ndPerson: Word('потчуешь', 1),
  singular3rdPerson: Word('потчует', 1),
  plural1stPerson: Word('потчуем', 1),
  plural2ndPerson: Word('потчуете', 1),
  plural3rdPerson: Word('потчуют', 1),
  masculinePast: Word('потчевал', 1),
  femininePast: Word('потчевала', 1),
  neuterPast: Word('потчевало', 1),
  pluralPast: Word('потчевали', 1),
  imperativeInformal: Word('потчуй', 1),
  imperativeFormal: Word('потчуйте', 1),
  imperfect: [],
};

perfectVerbs.set(потчевать.name.text, потчевать);

export { потчевать };