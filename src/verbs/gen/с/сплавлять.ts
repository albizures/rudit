import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сплавлять: PerfectVerb = {
  name: Word('сплавлять', 6),
  singular1stPerson: Word('сплавляю', 6),
  singular2ndPerson: Word('сплавляешь', 6),
  singular3rdPerson: Word('сплавляет', 6),
  plural1stPerson: Word('сплавляем', 6),
  plural2ndPerson: Word('сплавляете', 6),
  plural3rdPerson: Word('сплавляют', 6),
  masculinePast: Word('сплавлял', 6),
  femininePast: Word('сплавляла', 6),
  neuterPast: Word('сплавляло', 6),
  pluralPast: Word('сплавляли', 6),
  imperativeInformal: Word('сплавляй', 6),
  imperativeFormal: Word('сплавляйте', 6),
  imperfect: [],
};

perfectVerbs.set(сплавлять.name.text, сплавлять);

export { сплавлять };