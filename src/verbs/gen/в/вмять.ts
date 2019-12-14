import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вмять: PerfectVerb = {
  name: Word('вмять', 2),
  singular1stPerson: Word('вомну', 4),
  singular2ndPerson: Word('вомнёшь', 1),
  singular3rdPerson: Word('вомнёт', 1),
  plural1stPerson: Word('вомнём', 1),
  plural2ndPerson: Word('вомнёте', 6),
  plural3rdPerson: Word('вомнут', 4),
  masculinePast: Word('вмял', 2),
  femininePast: Word('вмяла', 2),
  neuterPast: Word('вмяло', 2),
  pluralPast: Word('вмяли', 2),
  imperativeInformal: Word('вомни', 4),
  imperativeFormal: Word('вомните', 4),
  imperfect: [],
};

perfectVerbs.set(вмять.name.text, вмять);

export { вмять };