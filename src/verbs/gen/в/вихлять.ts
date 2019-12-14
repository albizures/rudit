import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вихлять: PerfectVerb = {
  name: Word('вихлять', 4),
  singular1stPerson: Word('вихляю', 4),
  singular2ndPerson: Word('вихляешь', 4),
  singular3rdPerson: Word('вихляет', 4),
  plural1stPerson: Word('вихляем', 4),
  plural2ndPerson: Word('вихляете', 4),
  plural3rdPerson: Word('вихляют', 4),
  masculinePast: Word('вихлял', 4),
  femininePast: Word('вихляла', 4),
  neuterPast: Word('вихляло', 4),
  pluralPast: Word('вихляли', 4),
  imperativeInformal: Word('вихляй', 4),
  imperativeFormal: Word('вихляйте', 4),
  imperfect: [],
};

perfectVerbs.set(вихлять.name.text, вихлять);

export { вихлять };