import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изготовлять: PerfectVerb = {
  name: Word('изготовлять', 8),
  singular1stPerson: Word('изготовляю', 8),
  singular2ndPerson: Word('изготовляешь', 8),
  singular3rdPerson: Word('изготовляет', 8),
  plural1stPerson: Word('изготовляем', 8),
  plural2ndPerson: Word('изготовляете', 8),
  plural3rdPerson: Word('изготовляют', 8),
  masculinePast: Word('изготовлял', 8),
  femininePast: Word('изготовляла', 8),
  neuterPast: Word('изготовляло', 8),
  pluralPast: Word('изготовляли', 8),
  imperativeInformal: Word('изготовляй', 8),
  imperativeFormal: Word('изготовляйте', 8),
  imperfect: [],
};

perfectVerbs.set(изготовлять.name.text, изготовлять);

export { изготовлять };