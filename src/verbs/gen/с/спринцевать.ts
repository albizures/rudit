import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спринцевать: PerfectVerb = {
  name: Word('спринцевать', 8),
  singular1stPerson: Word('спринцую', 6),
  singular2ndPerson: Word('спринцуешь', 6),
  singular3rdPerson: Word('спринцует', 6),
  plural1stPerson: Word('спринцуем', 6),
  plural2ndPerson: Word('спринцуете', 6),
  plural3rdPerson: Word('спринцуют', 6),
  masculinePast: Word('спринцевал', 8),
  femininePast: Word('спринцевала', 8),
  neuterPast: Word('спринцевало', 8),
  pluralPast: Word('спринцевали', 8),
  imperativeInformal: Word('спринцуй', 6),
  imperativeFormal: Word('спринцуйте', 6),
  imperfect: [],
};

perfectVerbs.set(спринцевать.name.text, спринцевать);

export { спринцевать };