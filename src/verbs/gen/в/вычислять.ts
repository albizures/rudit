import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вычислять: PerfectVerb = {
  name: Word('вычислять', 6),
  singular1stPerson: Word('вычисляю', 6),
  singular2ndPerson: Word('вычисляешь', 6),
  singular3rdPerson: Word('вычисляет', 6),
  plural1stPerson: Word('вычисляем', 6),
  plural2ndPerson: Word('вычисляете', 6),
  plural3rdPerson: Word('вычисляют', 6),
  masculinePast: Word('вычислял', 6),
  femininePast: Word('вычисляла', 6),
  neuterPast: Word('вычисляло', 6),
  pluralPast: Word('вычисляли', 6),
  imperativeInformal: Word('вычисляй', 6),
  imperativeFormal: Word('вычисляйте', 6),
  imperfect: [],
};

perfectVerbs.set(вычислять.name.text, вычислять);

export { вычислять };