import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прославлять: PerfectVerb = {
  name: Word('прославлять', 8),
  singular1stPerson: Word('прославляю', 8),
  singular2ndPerson: Word('прославляешь', 8),
  singular3rdPerson: Word('прославляет', 8),
  plural1stPerson: Word('прославляем', 8),
  plural2ndPerson: Word('прославляете', 8),
  plural3rdPerson: Word('прославляют', 8),
  masculinePast: Word('прославлял', 8),
  femininePast: Word('прославляла', 8),
  neuterPast: Word('прославляло', 8),
  pluralPast: Word('прославляли', 8),
  imperativeInformal: Word('прославляй', 8),
  imperativeFormal: Word('прославляйте', 8),
  imperfect: [],
};

perfectVerbs.set(прославлять.name.text, прославлять);

export { прославлять };