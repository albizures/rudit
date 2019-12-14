import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const танцевать: PerfectVerb = {
  name: Word('танцевать', 6),
  singular1stPerson: Word('танцую', 4),
  singular2ndPerson: Word('танцуешь', 4),
  singular3rdPerson: Word('танцует', 4),
  plural1stPerson: Word('танцуем', 4),
  plural2ndPerson: Word('танцуете', 4),
  plural3rdPerson: Word('танцуют', 4),
  masculinePast: Word('танцевал', 6),
  femininePast: Word('танцевала', 6),
  neuterPast: Word('танцевало', 6),
  pluralPast: Word('танцевали', 6),
  imperativeInformal: Word('танцуй', 4),
  imperativeFormal: Word('танцуйте', 4),
  imperfect: [],
};

perfectVerbs.set(танцевать.name.text, танцевать);

export { танцевать };