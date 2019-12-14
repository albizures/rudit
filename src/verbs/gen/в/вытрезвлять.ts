import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вытрезвлять: PerfectVerb = {
  name: Word('вытрезвлять', 8),
  singular1stPerson: Word('вытрезвляю', 8),
  singular2ndPerson: Word('вытрезвляешь', 8),
  singular3rdPerson: Word('вытрезвляет', 8),
  plural1stPerson: Word('вытрезвляем', 8),
  plural2ndPerson: Word('вытрезвляете', 8),
  plural3rdPerson: Word('вытрезвляют', 8),
  masculinePast: Word('вытрезвлял', 8),
  femininePast: Word('вытрезвляла', 8),
  neuterPast: Word('вытрезвляло', 8),
  pluralPast: Word('вытрезвляли', 8),
  imperativeInformal: Word('вытрезвляй', 8),
  imperativeFormal: Word('вытрезвляйте', 8),
  imperfect: [],
};

perfectVerbs.set(вытрезвлять.name.text, вытрезвлять);

export { вытрезвлять };