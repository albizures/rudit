import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оживлять: PerfectVerb = {
  name: Word('оживлять', 5),
  singular1stPerson: Word('оживляю', 5),
  singular2ndPerson: Word('оживляешь', 5),
  singular3rdPerson: Word('оживляет', 5),
  plural1stPerson: Word('оживляем', 5),
  plural2ndPerson: Word('оживляете', 5),
  plural3rdPerson: Word('оживляют', 5),
  masculinePast: Word('оживлял', 5),
  femininePast: Word('оживляла', 5),
  neuterPast: Word('оживляло', 5),
  pluralPast: Word('оживляли', 5),
  imperativeInformal: Word('оживляй', 5),
  imperativeFormal: Word('оживляйте', 5),
  imperfect: [],
};

perfectVerbs.set(оживлять.name.text, оживлять);

export { оживлять };