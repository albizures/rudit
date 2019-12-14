import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прищемлять: PerfectVerb = {
  name: Word('прищемлять', 7),
  singular1stPerson: Word('прищемляю', 7),
  singular2ndPerson: Word('прищемляешь', 7),
  singular3rdPerson: Word('прищемляет', 7),
  plural1stPerson: Word('прищемляем', 7),
  plural2ndPerson: Word('прищемляете', 7),
  plural3rdPerson: Word('прищемляют', 7),
  masculinePast: Word('прищемлял', 7),
  femininePast: Word('прищемляла', 7),
  neuterPast: Word('прищемляло', 7),
  pluralPast: Word('прищемляли', 7),
  imperativeInformal: Word('прищемляй', 7),
  imperativeFormal: Word('прищемляйте', 7),
  imperfect: [],
};

perfectVerbs.set(прищемлять.name.text, прищемлять);

export { прищемлять };