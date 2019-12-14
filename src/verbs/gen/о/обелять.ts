import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обелять: PerfectVerb = {
  name: Word('обелять', 4),
  singular1stPerson: Word('обеляю', 4),
  singular2ndPerson: Word('обеляешь', 4),
  singular3rdPerson: Word('обеляет', 4),
  plural1stPerson: Word('обеляем', 4),
  plural2ndPerson: Word('обеляете', 4),
  plural3rdPerson: Word('обеляют', 4),
  masculinePast: Word('обелял', 4),
  femininePast: Word('обеляла', 4),
  neuterPast: Word('обеляло', 4),
  pluralPast: Word('обеляли', 4),
  imperativeInformal: Word('обеляй', 4),
  imperativeFormal: Word('обеляйте', 4),
  imperfect: [],
};

perfectVerbs.set(обелять.name.text, обелять);

export { обелять };