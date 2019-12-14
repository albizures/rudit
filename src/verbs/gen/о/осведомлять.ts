import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осведомлять: PerfectVerb = {
  name: Word('осведомлять', 8),
  singular1stPerson: Word('осведомляю', 8),
  singular2ndPerson: Word('осведомляешь', 8),
  singular3rdPerson: Word('осведомляет', 8),
  plural1stPerson: Word('осведомляем', 8),
  plural2ndPerson: Word('осведомляете', 8),
  plural3rdPerson: Word('осведомляют', 8),
  masculinePast: Word('осведомлял', 8),
  femininePast: Word('осведомляла', 8),
  neuterPast: Word('осведомляло', 8),
  pluralPast: Word('осведомляли', 8),
  imperativeInformal: Word('осведомляй', 8),
  imperativeFormal: Word('осведомляйте', 8),
  imperfect: [],
};

perfectVerbs.set(осведомлять.name.text, осведомлять);

export { осведомлять };