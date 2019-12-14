import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вставлять: PerfectVerb = {
  name: Word('вставлять', 6),
  singular1stPerson: Word('вставляю', 6),
  singular2ndPerson: Word('вставляешь', 6),
  singular3rdPerson: Word('вставляет', 6),
  plural1stPerson: Word('вставляем', 6),
  plural2ndPerson: Word('вставляете', 6),
  plural3rdPerson: Word('вставляют', 6),
  masculinePast: Word('вставлял', 6),
  femininePast: Word('вставляла', 6),
  neuterPast: Word('вставляло', 6),
  pluralPast: Word('вставляли', 6),
  imperativeInformal: Word('вставляй', 6),
  imperativeFormal: Word('вставляйте', 6),
  imperfect: [],
};

perfectVerbs.set(вставлять.name.text, вставлять);

export { вставлять };