import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окроплять: PerfectVerb = {
  name: Word('окроплять', 6),
  singular1stPerson: Word('окропляю', 6),
  singular2ndPerson: Word('окропляешь', 6),
  singular3rdPerson: Word('окропляет', 6),
  plural1stPerson: Word('окропляем', 6),
  plural2ndPerson: Word('окропляете', 6),
  plural3rdPerson: Word('окропляют', 6),
  masculinePast: Word('окроплял', 6),
  femininePast: Word('окропляла', 6),
  neuterPast: Word('окропляло', 6),
  pluralPast: Word('окропляли', 6),
  imperativeInformal: Word('окропляй', 6),
  imperativeFormal: Word('окропляйте', 6),
  imperfect: [],
};

perfectVerbs.set(окроплять.name.text, окроплять);

export { окроплять };