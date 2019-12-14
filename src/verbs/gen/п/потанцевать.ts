import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потанцевать: PerfectVerb = {
  name: Word('потанцевать', 8),
  singular1stPerson: Word('потанцую', 6),
  singular2ndPerson: Word('потанцуешь', 6),
  singular3rdPerson: Word('потанцует', 6),
  plural1stPerson: Word('потанцуем', 6),
  plural2ndPerson: Word('потанцуете', 6),
  plural3rdPerson: Word('потанцуют', 6),
  masculinePast: Word('потанцевал', 8),
  femininePast: Word('потанцевала', 8),
  neuterPast: Word('потанцевало', 8),
  pluralPast: Word('потанцевали', 8),
  imperativeInformal: Word('потанцуй', 6),
  imperativeFormal: Word('потанцуйте', 6),
  imperfect: [],
};

perfectVerbs.set(потанцевать.name.text, потанцевать);

export { потанцевать };