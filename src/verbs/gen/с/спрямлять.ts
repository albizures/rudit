import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спрямлять: PerfectVerb = {
  name: Word('спрямлять', 6),
  singular1stPerson: Word('спрямляю', 6),
  singular2ndPerson: Word('спрямляешь', 6),
  singular3rdPerson: Word('спрямляет', 6),
  plural1stPerson: Word('спрямляем', 6),
  plural2ndPerson: Word('спрямляете', 6),
  plural3rdPerson: Word('спрямляют', 6),
  masculinePast: Word('спрямлял', 6),
  femininePast: Word('спрямляла', 6),
  neuterPast: Word('спрямляло', 6),
  pluralPast: Word('спрямляли', 6),
  imperativeInformal: Word('спрямляй', 6),
  imperativeFormal: Word('спрямляйте', 6),
  imperfect: [],
};

perfectVerbs.set(спрямлять.name.text, спрямлять);

export { спрямлять };