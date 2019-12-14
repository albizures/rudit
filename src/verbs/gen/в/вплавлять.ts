import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вплавлять: PerfectVerb = {
  name: Word('вплавлять', 6),
  singular1stPerson: Word('вплавляю', 6),
  singular2ndPerson: Word('вплавляешь', 6),
  singular3rdPerson: Word('вплавляет', 6),
  plural1stPerson: Word('вплавляем', 6),
  plural2ndPerson: Word('вплавляете', 6),
  plural3rdPerson: Word('вплавляют', 6),
  masculinePast: Word('вплавлял', 6),
  femininePast: Word('вплавляла', 6),
  neuterPast: Word('вплавляло', 6),
  pluralPast: Word('вплавляли', 6),
  imperativeInformal: Word('вплавляй', 6),
  imperativeFormal: Word('вплавляйте', 6),
  imperfect: [],
};

perfectVerbs.set(вплавлять.name.text, вплавлять);

export { вплавлять };