import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изъявлять: PerfectVerb = {
  name: Word('изъявлять', 6),
  singular1stPerson: Word('изъявляю', 6),
  singular2ndPerson: Word('изъявляешь', 6),
  singular3rdPerson: Word('изъявляет', 6),
  plural1stPerson: Word('изъявляем', 6),
  plural2ndPerson: Word('изъявляете', 6),
  plural3rdPerson: Word('изъявляют', 6),
  masculinePast: Word('изъявлял', 6),
  femininePast: Word('изъявляла', 6),
  neuterPast: Word('изъявляло', 6),
  pluralPast: Word('изъявляли', 6),
  imperativeInformal: Word('изъявляй', 6),
  imperativeFormal: Word('изъявляйте', 6),
  imperfect: [],
};

perfectVerbs.set(изъявлять.name.text, изъявлять);

export { изъявлять };