import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уставлять: PerfectVerb = {
  name: Word('уставлять', 6),
  singular1stPerson: Word('уставляю', 6),
  singular2ndPerson: Word('уставляешь', 6),
  singular3rdPerson: Word('уставляет', 6),
  plural1stPerson: Word('уставляем', 6),
  plural2ndPerson: Word('уставляете', 6),
  plural3rdPerson: Word('уставляют', 6),
  masculinePast: Word('уставлял', 6),
  femininePast: Word('уставляла', 6),
  neuterPast: Word('уставляло', 6),
  pluralPast: Word('уставляли', 6),
  imperativeInformal: Word('уставляй', 6),
  imperativeFormal: Word('уставляйте', 6),
  imperfect: [],
};

perfectVerbs.set(уставлять.name.text, уставлять);

export { уставлять };