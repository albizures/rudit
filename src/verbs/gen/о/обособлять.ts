import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обособлять: PerfectVerb = {
  name: Word('обособлять', 7),
  singular1stPerson: Word('обособляю', 7),
  singular2ndPerson: Word('обособляешь', 7),
  singular3rdPerson: Word('обособляет', 7),
  plural1stPerson: Word('обособляем', 7),
  plural2ndPerson: Word('обособляете', 7),
  plural3rdPerson: Word('обособляют', 7),
  masculinePast: Word('обособлял', 7),
  femininePast: Word('обособляла', 7),
  neuterPast: Word('обособляло', 7),
  pluralPast: Word('обособляли', 7),
  imperativeInformal: Word('обособляй', 7),
  imperativeFormal: Word('обособляйте', 7),
  imperfect: [],
};

perfectVerbs.set(обособлять.name.text, обособлять);

export { обособлять };