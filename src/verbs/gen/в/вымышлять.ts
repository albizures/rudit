import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вымышлять: PerfectVerb = {
  name: Word('вымышлять', 6),
  singular1stPerson: Word('вымышляю', 6),
  singular2ndPerson: Word('вымышляешь', 6),
  singular3rdPerson: Word('вымышляет', 6),
  plural1stPerson: Word('вымышляем', 6),
  plural2ndPerson: Word('вымышляете', 6),
  plural3rdPerson: Word('вымышляют', 6),
  masculinePast: Word('вымышлял', 6),
  femininePast: Word('вымышляла', 6),
  neuterPast: Word('вымышляло', 6),
  pluralPast: Word('вымышляли', 6),
  imperativeInformal: Word('вымышляй', 6),
  imperativeFormal: Word('вымышляйте', 6),
  imperfect: [],
};

perfectVerbs.set(вымышлять.name.text, вымышлять);

export { вымышлять };