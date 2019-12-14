import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приправлять: PerfectVerb = {
  name: Word('приправлять', 8),
  singular1stPerson: Word('приправляю', 8),
  singular2ndPerson: Word('приправляешь', 8),
  singular3rdPerson: Word('приправляет', 8),
  plural1stPerson: Word('приправляем', 8),
  plural2ndPerson: Word('приправляете', 8),
  plural3rdPerson: Word('приправляют', 8),
  masculinePast: Word('приправлял', 8),
  femininePast: Word('приправляла', 8),
  neuterPast: Word('приправляло', 8),
  pluralPast: Word('приправляли', 8),
  imperativeInformal: Word('приправляй', 8),
  imperativeFormal: Word('приправляйте', 8),
  imperfect: [],
};

perfectVerbs.set(приправлять.name.text, приправлять);

export { приправлять };