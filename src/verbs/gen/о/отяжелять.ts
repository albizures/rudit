import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отяжелять: PerfectVerb = {
  name: Word('отяжелять', 6),
  singular1stPerson: Word('отяжеляю', 6),
  singular2ndPerson: Word('отяжеляешь', 6),
  singular3rdPerson: Word('отяжеляет', 6),
  plural1stPerson: Word('отяжеляем', 6),
  plural2ndPerson: Word('отяжеляете', 6),
  plural3rdPerson: Word('отяжеляют', 6),
  masculinePast: Word('отяжелял', 6),
  femininePast: Word('отяжеляла', 6),
  neuterPast: Word('отяжеляло', 6),
  pluralPast: Word('отяжеляли', 6),
  imperativeInformal: Word('отяжеляй', 6),
  imperativeFormal: Word('отяжеляйте', 6),
  imperfect: [],
};

perfectVerbs.set(отяжелять.name.text, отяжелять);

export { отяжелять };