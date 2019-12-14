import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заготовлять: PerfectVerb = {
  name: Word('заготовлять', 8),
  singular1stPerson: Word('заготовляю', 8),
  singular2ndPerson: Word('заготовляешь', 8),
  singular3rdPerson: Word('заготовляет', 8),
  plural1stPerson: Word('заготовляем', 8),
  plural2ndPerson: Word('заготовляете', 8),
  plural3rdPerson: Word('заготовляют', 8),
  masculinePast: Word('заготовлял', 8),
  femininePast: Word('заготовляла', 8),
  neuterPast: Word('заготовляло', 8),
  pluralPast: Word('заготовляли', 8),
  imperativeInformal: Word('заготовляй', 8),
  imperativeFormal: Word('заготовляйте', 8),
  imperfect: [],
};

perfectVerbs.set(заготовлять.name.text, заготовлять);

export { заготовлять };