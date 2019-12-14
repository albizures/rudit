import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оставлять: PerfectVerb = {
  name: Word('оставлять', 6),
  singular1stPerson: Word('оставляю', 6),
  singular2ndPerson: Word('оставляешь', 6),
  singular3rdPerson: Word('оставляет', 6),
  plural1stPerson: Word('оставляем', 6),
  plural2ndPerson: Word('оставляете', 6),
  plural3rdPerson: Word('оставляют', 6),
  masculinePast: Word('оставлял', 6),
  femininePast: Word('оставляла', 6),
  neuterPast: Word('оставляло', 6),
  pluralPast: Word('оставляли', 6),
  imperativeInformal: Word('оставляй', 6),
  imperativeFormal: Word('оставляйте', 6),
  imperfect: ['оставить'],
};

perfectVerbs.set(оставлять.name.text, оставлять);

export { оставлять };