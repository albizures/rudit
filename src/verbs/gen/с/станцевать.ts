import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const станцевать: PerfectVerb = {
  name: Word('станцевать', 7),
  singular1stPerson: Word('станцую', 5),
  singular2ndPerson: Word('станцуешь', 5),
  singular3rdPerson: Word('станцует', 5),
  plural1stPerson: Word('станцуем', 5),
  plural2ndPerson: Word('станцуете', 5),
  plural3rdPerson: Word('станцуют', 5),
  masculinePast: Word('станцевал', 7),
  femininePast: Word('станцевала', 7),
  neuterPast: Word('станцевало', 7),
  pluralPast: Word('станцевали', 7),
  imperativeInformal: Word('станцуй', 5),
  imperativeFormal: Word('станцуйте', 5),
  imperfect: [],
};

perfectVerbs.set(станцевать.name.text, станцевать);

export { станцевать };