import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вправлять: PerfectVerb = {
  name: Word('вправлять', 6),
  singular1stPerson: Word('вправляю', 6),
  singular2ndPerson: Word('вправляешь', 6),
  singular3rdPerson: Word('вправляет', 6),
  plural1stPerson: Word('вправляем', 6),
  plural2ndPerson: Word('вправляете', 6),
  plural3rdPerson: Word('вправляют', 6),
  masculinePast: Word('вправлял', 6),
  femininePast: Word('вправляла', 6),
  neuterPast: Word('вправляло', 6),
  pluralPast: Word('вправляли', 6),
  imperativeInformal: Word('вправляй', 6),
  imperativeFormal: Word('вправляйте', 6),
  imperfect: [],
};

perfectVerbs.set(вправлять.name.text, вправлять);

export { вправлять };