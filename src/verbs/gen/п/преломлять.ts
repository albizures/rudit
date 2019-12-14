import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const преломлять: PerfectVerb = {
  name: Word('преломлять', 7),
  singular1stPerson: Word('преломляю', 7),
  singular2ndPerson: Word('преломляешь', 7),
  singular3rdPerson: Word('преломляет', 7),
  plural1stPerson: Word('преломляем', 7),
  plural2ndPerson: Word('преломляете', 7),
  plural3rdPerson: Word('преломляют', 7),
  masculinePast: Word('преломлял', 7),
  femininePast: Word('преломляла', 7),
  neuterPast: Word('преломляло', 7),
  pluralPast: Word('преломляли', 7),
  imperativeInformal: Word('преломляй', 7),
  imperativeFormal: Word('преломляйте', 7),
  imperfect: [],
};

perfectVerbs.set(преломлять.name.text, преломлять);

export { преломлять };