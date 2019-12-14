import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const захламлять: PerfectVerb = {
  name: Word('захламлять', 7),
  singular1stPerson: Word('захламляю', 7),
  singular2ndPerson: Word('захламляешь', 7),
  singular3rdPerson: Word('захламляет', 7),
  plural1stPerson: Word('захламляем', 7),
  plural2ndPerson: Word('захламляете', 7),
  plural3rdPerson: Word('захламляют', 7),
  masculinePast: Word('захламлял', 7),
  femininePast: Word('захламляла', 7),
  neuterPast: Word('захламляло', 7),
  pluralPast: Word('захламляли', 7),
  imperativeInformal: Word('захламляй', 7),
  imperativeFormal: Word('захламляйте', 7),
  imperfect: [],
};

perfectVerbs.set(захламлять.name.text, захламлять);

export { захламлять };