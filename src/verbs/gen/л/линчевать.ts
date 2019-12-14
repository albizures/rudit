import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const линчевать: PerfectVerb = {
  name: Word('линчевать', 6),
  singular1stPerson: Word('линчую', 4),
  singular2ndPerson: Word('линчуешь', 4),
  singular3rdPerson: Word('линчует', 4),
  plural1stPerson: Word('линчуем', 4),
  plural2ndPerson: Word('линчуете', 4),
  plural3rdPerson: Word('линчуют', 4),
  masculinePast: Word('линчевал', 6),
  femininePast: Word('линчевала', 6),
  neuterPast: Word('линчевало', 6),
  pluralPast: Word('линчевали', 6),
  imperativeInformal: Word('линчуй', 4),
  imperativeFormal: Word('линчуйте', 4),
  imperfect: [],
};

perfectVerbs.set(линчевать.name.text, линчевать);

export { линчевать };