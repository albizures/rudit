import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const остеклять: PerfectVerb = {
  name: Word('остеклять', 6),
  singular1stPerson: Word('остекляю', 6),
  singular2ndPerson: Word('остекляешь', 6),
  singular3rdPerson: Word('остекляет', 6),
  plural1stPerson: Word('остекляем', 6),
  plural2ndPerson: Word('остекляете', 6),
  plural3rdPerson: Word('остекляют', 6),
  masculinePast: Word('остеклял', 6),
  femininePast: Word('остекляла', 6),
  neuterPast: Word('остекляло', 6),
  pluralPast: Word('остекляли', 6),
  imperativeInformal: Word('остекляй', 6),
  imperativeFormal: Word('остекляйте', 6),
  imperfect: [],
};

perfectVerbs.set(остеклять.name.text, остеклять);

export { остеклять };