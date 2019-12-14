import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надставлять: PerfectVerb = {
  name: Word('надставлять', 8),
  singular1stPerson: Word('надставляю', 8),
  singular2ndPerson: Word('надставляешь', 8),
  singular3rdPerson: Word('надставляет', 8),
  plural1stPerson: Word('надставляем', 8),
  plural2ndPerson: Word('надставляете', 8),
  plural3rdPerson: Word('надставляют', 8),
  masculinePast: Word('надставлял', 8),
  femininePast: Word('надставляла', 8),
  neuterPast: Word('надставляло', 8),
  pluralPast: Word('надставляли', 8),
  imperativeInformal: Word('надставляй', 8),
  imperativeFormal: Word('надставляйте', 8),
  imperfect: [],
};

perfectVerbs.set(надставлять.name.text, надставлять);

export { надставлять };