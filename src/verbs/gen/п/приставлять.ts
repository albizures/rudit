import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приставлять: PerfectVerb = {
  name: Word('приставлять', 8),
  singular1stPerson: Word('приставляю', 8),
  singular2ndPerson: Word('приставляешь', 8),
  singular3rdPerson: Word('приставляет', 8),
  plural1stPerson: Word('приставляем', 8),
  plural2ndPerson: Word('приставляете', 8),
  plural3rdPerson: Word('приставляют', 8),
  masculinePast: Word('приставлял', 8),
  femininePast: Word('приставляла', 8),
  neuterPast: Word('приставляло', 8),
  pluralPast: Word('приставляли', 8),
  imperativeInformal: Word('приставляй', 8),
  imperativeFormal: Word('приставляйте', 8),
  imperfect: [],
};

perfectVerbs.set(приставлять.name.text, приставлять);

export { приставлять };