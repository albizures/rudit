import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раздроблять: PerfectVerb = {
  name: Word('раздроблять', 8),
  singular1stPerson: Word('раздробляю', 8),
  singular2ndPerson: Word('раздробляешь', 8),
  singular3rdPerson: Word('раздробляет', 8),
  plural1stPerson: Word('раздробляем', 8),
  plural2ndPerson: Word('раздробляете', 8),
  plural3rdPerson: Word('раздробляют', 8),
  masculinePast: Word('раздроблял', 8),
  femininePast: Word('раздробляла', 8),
  neuterPast: Word('раздробляло', 8),
  pluralPast: Word('раздробляли', 8),
  imperativeInformal: Word('раздробляй', 8),
  imperativeFormal: Word('раздробляйте', 8),
  imperfect: [],
};

perfectVerbs.set(раздроблять.name.text, раздроблять);

export { раздроблять };