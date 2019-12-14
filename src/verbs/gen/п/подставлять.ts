import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подставлять: PerfectVerb = {
  name: Word('подставлять', 8),
  singular1stPerson: Word('подставляю', 8),
  singular2ndPerson: Word('подставляешь', 8),
  singular3rdPerson: Word('подставляет', 8),
  plural1stPerson: Word('подставляем', 8),
  plural2ndPerson: Word('подставляете', 8),
  plural3rdPerson: Word('подставляют', 8),
  masculinePast: Word('подставлял', 8),
  femininePast: Word('подставляла', 8),
  neuterPast: Word('подставляло', 8),
  pluralPast: Word('подставляли', 8),
  imperativeInformal: Word('подставляй', 8),
  imperativeFormal: Word('подставляйте', 8),
  imperfect: [],
};

perfectVerbs.set(подставлять.name.text, подставлять);

export { подставлять };