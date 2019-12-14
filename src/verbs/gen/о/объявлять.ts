import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const объявлять: PerfectVerb = {
  name: Word('объявлять', 6),
  singular1stPerson: Word('объявляю', 6),
  singular2ndPerson: Word('объявляешь', 6),
  singular3rdPerson: Word('объявляет', 6),
  plural1stPerson: Word('объявляем', 6),
  plural2ndPerson: Word('объявляете', 6),
  plural3rdPerson: Word('объявляют', 6),
  masculinePast: Word('объявлял', 6),
  femininePast: Word('объявляла', 6),
  neuterPast: Word('объявляло', 6),
  pluralPast: Word('объявляли', 6),
  imperativeInformal: Word('объявляй', 6),
  imperativeFormal: Word('объявляйте', 6),
  imperfect: ['объявить'],
};

perfectVerbs.set(объявлять.name.text, объявлять);

export { объявлять };