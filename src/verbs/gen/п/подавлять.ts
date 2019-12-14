import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подавлять: PerfectVerb = {
  name: Word('подавлять', 6),
  singular1stPerson: Word('подавляю', 6),
  singular2ndPerson: Word('подавляешь', 6),
  singular3rdPerson: Word('подавляет', 6),
  plural1stPerson: Word('подавляем', 6),
  plural2ndPerson: Word('подавляете', 6),
  plural3rdPerson: Word('подавляют', 6),
  masculinePast: Word('подавлял', 6),
  femininePast: Word('подавляла', 6),
  neuterPast: Word('подавляло', 6),
  pluralPast: Word('подавляли', 6),
  imperativeInformal: Word('подавляй', 6),
  imperativeFormal: Word('подавляйте', 6),
  imperfect: [],
};

perfectVerbs.set(подавлять.name.text, подавлять);

export { подавлять };