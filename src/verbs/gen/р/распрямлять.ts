import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распрямлять: PerfectVerb = {
  name: Word('распрямлять', 8),
  singular1stPerson: Word('распрямляю', 8),
  singular2ndPerson: Word('распрямляешь', 8),
  singular3rdPerson: Word('распрямляет', 8),
  plural1stPerson: Word('распрямляем', 8),
  plural2ndPerson: Word('распрямляете', 8),
  plural3rdPerson: Word('распрямляют', 8),
  masculinePast: Word('распрямлял', 8),
  femininePast: Word('распрямляла', 8),
  neuterPast: Word('распрямляло', 8),
  pluralPast: Word('распрямляли', 8),
  imperativeInformal: Word('распрямляй', 8),
  imperativeFormal: Word('распрямляйте', 8),
  imperfect: [],
};

perfectVerbs.set(распрямлять.name.text, распрямлять);

export { распрямлять };