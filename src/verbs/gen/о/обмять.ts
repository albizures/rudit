import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обмять: PerfectVerb = {
  name: Word('обмять', 3),
  singular1stPerson: Word('обомну', 5),
  singular2ndPerson: Word('обомнёшь', 5),
  singular3rdPerson: Word('обомнёт', 5),
  plural1stPerson: Word('обомнём', 5),
  plural2ndPerson: Word('обомнёте', 5),
  plural3rdPerson: Word('обомнут', 5),
  masculinePast: Word('обмял', 3),
  femininePast: Word('обмяла', 3),
  neuterPast: Word('обмяло', 3),
  pluralPast: Word('обмяли', 3),
  imperativeInformal: Word('обомни', 5),
  imperativeFormal: Word('обомните', 5),
  imperfect: [],
};

perfectVerbs.set(обмять.name.text, обмять);

export { обмять };