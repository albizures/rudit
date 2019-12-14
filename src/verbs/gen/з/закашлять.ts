import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закашлять: PerfectVerb = {
  name: Word('закашлять', 3),
  singular1stPerson: Word('закашляю', 3),
  singular2ndPerson: Word('закашляешь', 3),
  singular3rdPerson: Word('закашляет', 3),
  plural1stPerson: Word('закашляем', 3),
  plural2ndPerson: Word('закашляете', 3),
  plural3rdPerson: Word('закашляют', 3),
  masculinePast: Word('закашлял', 3),
  femininePast: Word('закашляла', 3),
  neuterPast: Word('закашляло', 3),
  pluralPast: Word('закашляли', 3),
  imperativeInformal: Word('закашляй', 3),
  imperativeFormal: Word('закашляйте', 3),
  imperfect: [],
};

perfectVerbs.set(закашлять.name.text, закашлять);

export { закашлять };