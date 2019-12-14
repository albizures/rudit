import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const испепелять: PerfectVerb = {
  name: Word('испепелять', 7),
  singular1stPerson: Word('испепеляю', 7),
  singular2ndPerson: Word('испепеляешь', 7),
  singular3rdPerson: Word('испепеляет', 7),
  plural1stPerson: Word('испепеляем', 7),
  plural2ndPerson: Word('испепеляете', 7),
  plural3rdPerson: Word('испепеляют', 7),
  masculinePast: Word('испепелял', 7),
  femininePast: Word('испепеляла', 7),
  neuterPast: Word('испепеляло', 7),
  pluralPast: Word('испепеляли', 7),
  imperativeInformal: Word('испепеляй', 7),
  imperativeFormal: Word('испепеляйте', 7),
  imperfect: [],
};

perfectVerbs.set(испепелять.name.text, испепелять);

export { испепелять };