import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подготовлять: PerfectVerb = {
  name: Word('подготовлять', 9),
  singular1stPerson: Word('подготовляю', 9),
  singular2ndPerson: Word('подготовляешь', 9),
  singular3rdPerson: Word('подготовляет', 9),
  plural1stPerson: Word('подготовляем', 9),
  plural2ndPerson: Word('подготовляете', 9),
  plural3rdPerson: Word('подготовляют', 9),
  masculinePast: Word('подготовлял', 9),
  femininePast: Word('подготовляла', 9),
  neuterPast: Word('подготовляло', 9),
  pluralPast: Word('подготовляли', 9),
  imperativeInformal: Word('подготовляй', 9),
  imperativeFormal: Word('подготовляйте', 9),
  imperfect: [],
};

perfectVerbs.set(подготовлять.name.text, подготовлять);

export { подготовлять };