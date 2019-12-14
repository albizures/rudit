import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помышлять: PerfectVerb = {
  name: Word('помышлять', 6),
  singular1stPerson: Word('помышляю', 6),
  singular2ndPerson: Word('помышляешь', 6),
  singular3rdPerson: Word('помышляет', 6),
  plural1stPerson: Word('помышляем', 6),
  plural2ndPerson: Word('помышляете', 6),
  plural3rdPerson: Word('помышляют', 6),
  masculinePast: Word('помышлял', 6),
  femininePast: Word('помышляла', 6),
  neuterPast: Word('помышляло', 6),
  pluralPast: Word('помышляли', 6),
  imperativeInformal: Word('помышляй', 6),
  imperativeFormal: Word('помышляйте', 6),
  imperfect: [],
};

perfectVerbs.set(помышлять.name.text, помышлять);

export { помышлять };