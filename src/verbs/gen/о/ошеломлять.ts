import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ошеломлять: PerfectVerb = {
  name: Word('ошеломлять', 7),
  singular1stPerson: Word('ошеломляю', 7),
  singular2ndPerson: Word('ошеломляешь', 7),
  singular3rdPerson: Word('ошеломляет', 7),
  plural1stPerson: Word('ошеломляем', 7),
  plural2ndPerson: Word('ошеломляете', 7),
  plural3rdPerson: Word('ошеломляют', 7),
  masculinePast: Word('ошеломлял', 7),
  femininePast: Word('ошеломляла', 7),
  neuterPast: Word('ошеломляло', 7),
  pluralPast: Word('ошеломляли', 7),
  imperativeInformal: Word('ошеломляй', 7),
  imperativeFormal: Word('ошеломляйте', 7),
  imperfect: [],
};

perfectVerbs.set(ошеломлять.name.text, ошеломлять);

export { ошеломлять };