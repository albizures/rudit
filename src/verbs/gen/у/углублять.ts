import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const углублять: PerfectVerb = {
  name: Word('углублять', 6),
  singular1stPerson: Word('углубляю', 6),
  singular2ndPerson: Word('углубляешь', 6),
  singular3rdPerson: Word('углубляет', 6),
  plural1stPerson: Word('углубляем', 6),
  plural2ndPerson: Word('углубляете', 6),
  plural3rdPerson: Word('углубляют', 6),
  masculinePast: Word('углублял', 6),
  femininePast: Word('углубляла', 6),
  neuterPast: Word('углубляло', 6),
  pluralPast: Word('углубляли', 6),
  imperativeInformal: Word('углубляй', 6),
  imperativeFormal: Word('углубляйте', 6),
  imperfect: [],
};

perfectVerbs.set(углублять.name.text, углублять);

export { углублять };