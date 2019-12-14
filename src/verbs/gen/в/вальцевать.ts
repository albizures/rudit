import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вальцевать: PerfectVerb = {
  name: Word('вальцевать', 7),
  singular1stPerson: Word('вальцую', 5),
  singular2ndPerson: Word('вальцуешь', 5),
  singular3rdPerson: Word('вальцует', 5),
  plural1stPerson: Word('вальцуем', 5),
  plural2ndPerson: Word('вальцуете', 5),
  plural3rdPerson: Word('вальцуют', 5),
  masculinePast: Word('вальцевал', 7),
  femininePast: Word('вальцевала', 7),
  neuterPast: Word('вальцевало', 7),
  pluralPast: Word('вальцевали', 7),
  imperativeInformal: Word('вальцуй', 5),
  imperativeFormal: Word('вальцуйте', 5),
  imperfect: [],
};

perfectVerbs.set(вальцевать.name.text, вальцевать);

export { вальцевать };