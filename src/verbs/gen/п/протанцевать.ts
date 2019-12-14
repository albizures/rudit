import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const протанцевать: PerfectVerb = {
  name: Word('протанцевать', 9),
  singular1stPerson: Word('протанцую', 7),
  singular2ndPerson: Word('протанцуешь', 7),
  singular3rdPerson: Word('протанцует', 7),
  plural1stPerson: Word('протанцуем', 7),
  plural2ndPerson: Word('протанцуете', 7),
  plural3rdPerson: Word('протанцуют', 7),
  masculinePast: Word('протанцевал', 9),
  femininePast: Word('протанцевала', 9),
  neuterPast: Word('протанцевало', 9),
  pluralPast: Word('протанцевали', 9),
  imperativeInformal: Word('протанцуй', 7),
  imperativeFormal: Word('протанцуйте', 7),
  imperfect: [],
};

perfectVerbs.set(протанцевать.name.text, протанцевать);

export { протанцевать };