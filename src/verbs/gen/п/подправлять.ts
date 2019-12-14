import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подправлять: PerfectVerb = {
  name: Word('подправлять', 8),
  singular1stPerson: Word('подправляю', 8),
  singular2ndPerson: Word('подправляешь', 8),
  singular3rdPerson: Word('подправляет', 8),
  plural1stPerson: Word('подправляем', 8),
  plural2ndPerson: Word('подправляете', 8),
  plural3rdPerson: Word('подправляют', 8),
  masculinePast: Word('подправлял', 8),
  femininePast: Word('подправляла', 8),
  neuterPast: Word('подправляло', 8),
  pluralPast: Word('подправляли', 8),
  imperativeInformal: Word('подправляй', 8),
  imperativeFormal: Word('подправляйте', 8),
  imperfect: [],
};

perfectVerbs.set(подправлять.name.text, подправлять);

export { подправлять };