import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утяжелять: PerfectVerb = {
  name: Word('утяжелять', 6),
  singular1stPerson: Word('утяжеляю', 6),
  singular2ndPerson: Word('утяжеляешь', 6),
  singular3rdPerson: Word('утяжеляет', 6),
  plural1stPerson: Word('утяжеляем', 6),
  plural2ndPerson: Word('утяжеляете', 6),
  plural3rdPerson: Word('утяжеляют', 6),
  masculinePast: Word('утяжелял', 6),
  femininePast: Word('утяжеляла', 6),
  neuterPast: Word('утяжеляло', 6),
  pluralPast: Word('утяжеляли', 6),
  imperativeInformal: Word('утяжеляй', 6),
  imperativeFormal: Word('утяжеляйте', 6),
  imperfect: [],
};

perfectVerbs.set(утяжелять.name.text, утяжелять);

export { утяжелять };