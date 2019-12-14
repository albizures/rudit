import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кольцевать: PerfectVerb = {
  name: Word('кольцевать', 7),
  singular1stPerson: Word('кольцую', 5),
  singular2ndPerson: Word('кольцуешь', 5),
  singular3rdPerson: Word('кольцует', 5),
  plural1stPerson: Word('кольцуем', 5),
  plural2ndPerson: Word('кольцуете', 5),
  plural3rdPerson: Word('кольцуют', 5),
  masculinePast: Word('кольцевал', 7),
  femininePast: Word('кольцевала', 7),
  neuterPast: Word('кольцевало', 7),
  pluralPast: Word('кольцевали', 7),
  imperativeInformal: Word('кольцуй', 5),
  imperativeFormal: Word('кольцуйте', 5),
  imperfect: [],
};

perfectVerbs.set(кольцевать.name.text, кольцевать);

export { кольцевать };