import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закруглять: PerfectVerb = {
  name: Word('закруглять', 7),
  singular1stPerson: Word('закругляю', 7),
  singular2ndPerson: Word('закругляешь', 7),
  singular3rdPerson: Word('закругляет', 7),
  plural1stPerson: Word('закругляем', 7),
  plural2ndPerson: Word('закругляете', 7),
  plural3rdPerson: Word('закругляют', 7),
  masculinePast: Word('закруглял', 7),
  femininePast: Word('закругляла', 7),
  neuterPast: Word('закругляло', 7),
  pluralPast: Word('закругляли', 7),
  imperativeInformal: Word('закругляй', 7),
  imperativeFormal: Word('закругляйте', 7),
  imperfect: [],
};

perfectVerbs.set(закруглять.name.text, закруглять);

export { закруглять };