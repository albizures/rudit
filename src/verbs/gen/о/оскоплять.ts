import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оскоплять: PerfectVerb = {
  name: Word('оскоплять', 6),
  singular1stPerson: Word('оскопляю', 6),
  singular2ndPerson: Word('оскопляешь', 6),
  singular3rdPerson: Word('оскопляет', 6),
  plural1stPerson: Word('оскопляем', 6),
  plural2ndPerson: Word('оскопляете', 6),
  plural3rdPerson: Word('оскопляют', 6),
  masculinePast: Word('оскоплял', 6),
  femininePast: Word('оскопляла', 6),
  neuterPast: Word('оскопляло', 6),
  pluralPast: Word('оскопляли', 6),
  imperativeInformal: Word('оскопляй', 6),
  imperativeFormal: Word('оскопляйте', 6),
  imperfect: [],
};

perfectVerbs.set(оскоплять.name.text, оскоплять);

export { оскоплять };