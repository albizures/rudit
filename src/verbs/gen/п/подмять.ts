import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подмять: PerfectVerb = {
  name: Word('подмять', 4),
  singular1stPerson: Word('подомну', 6),
  singular2ndPerson: Word('подомнёшь', 1),
  singular3rdPerson: Word('подомнёт', 1),
  plural1stPerson: Word('подомнём', 1),
  plural2ndPerson: Word('подомнёте', 8),
  plural3rdPerson: Word('подомнут', 6),
  masculinePast: Word('подмял', 4),
  femininePast: Word('подмяла', 4),
  neuterPast: Word('подмяло', 4),
  pluralPast: Word('подмяли', 4),
  imperativeInformal: Word('подомни', 6),
  imperativeFormal: Word('подомните', 6),
  imperfect: [],
};

perfectVerbs.set(подмять.name.text, подмять);

export { подмять };