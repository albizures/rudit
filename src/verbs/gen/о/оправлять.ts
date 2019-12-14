import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оправлять: PerfectVerb = {
  name: Word('оправлять', 6),
  singular1stPerson: Word('оправляю', 6),
  singular2ndPerson: Word('оправляешь', 6),
  singular3rdPerson: Word('оправляет', 6),
  plural1stPerson: Word('оправляем', 6),
  plural2ndPerson: Word('оправляете', 6),
  plural3rdPerson: Word('оправляют', 6),
  masculinePast: Word('оправлял', 6),
  femininePast: Word('оправляла', 6),
  neuterPast: Word('оправляло', 6),
  pluralPast: Word('оправляли', 6),
  imperativeInformal: Word('оправляй', 6),
  imperativeFormal: Word('оправляйте', 6),
  imperfect: [],
};

perfectVerbs.set(оправлять.name.text, оправлять);

export { оправлять };