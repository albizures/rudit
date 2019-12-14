import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вытравлять: PerfectVerb = {
  name: Word('вытравлять', 7),
  singular1stPerson: Word('вытравляю', 7),
  singular2ndPerson: Word('вытравляешь', 7),
  singular3rdPerson: Word('вытравляет', 7),
  plural1stPerson: Word('вытравляем', 7),
  plural2ndPerson: Word('вытравляете', 7),
  plural3rdPerson: Word('вытравляют', 7),
  masculinePast: Word('вытравлял', 7),
  femininePast: Word('вытравляла', 7),
  neuterPast: Word('вытравляло', 7),
  pluralPast: Word('вытравляли', 7),
  imperativeInformal: Word('вытравляй', 7),
  imperativeFormal: Word('вытравляйте', 7),
  imperfect: [],
};

perfectVerbs.set(вытравлять.name.text, вытравлять);

export { вытравлять };