import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подгулять: PerfectVerb = {
  name: Word('подгулять', 6),
  singular1stPerson: Word('подгуляю', 6),
  singular2ndPerson: Word('подгуляешь', 6),
  singular3rdPerson: Word('подгуляет', 6),
  plural1stPerson: Word('подгуляем', 6),
  plural2ndPerson: Word('подгуляете', 6),
  plural3rdPerson: Word('подгуляют', 6),
  masculinePast: Word('подгулял', 6),
  femininePast: Word('подгуляла', 6),
  neuterPast: Word('подгуляло', 6),
  pluralPast: Word('подгуляли', 6),
  imperativeInformal: Word('подгуляй', 6),
  imperativeFormal: Word('подгуляйте', 6),
  imperfect: [],
};

perfectVerbs.set(подгулять.name.text, подгулять);

export { подгулять };