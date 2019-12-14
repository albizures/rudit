import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окольцевать: PerfectVerb = {
  name: Word('окольцевать', 8),
  singular1stPerson: Word('окольцую', 6),
  singular2ndPerson: Word('окольцуешь', 6),
  singular3rdPerson: Word('окольцует', 6),
  plural1stPerson: Word('окольцуем', 6),
  plural2ndPerson: Word('окольцуете', 6),
  plural3rdPerson: Word('окольцуют', 6),
  masculinePast: Word('окольцевал', 8),
  femininePast: Word('окольцевала', 8),
  neuterPast: Word('окольцевало', 8),
  pluralPast: Word('окольцевали', 8),
  imperativeInformal: Word('окольцуй', 6),
  imperativeFormal: Word('окольцуйте', 6),
  imperfect: [],
};

perfectVerbs.set(окольцевать.name.text, окольцевать);

export { окольцевать };