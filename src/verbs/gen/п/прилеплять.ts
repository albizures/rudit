import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прилеплять: PerfectVerb = {
  name: Word('прилеплять', 7),
  singular1stPerson: Word('прилепляю', 7),
  singular2ndPerson: Word('прилепляешь', 7),
  singular3rdPerson: Word('прилепляет', 7),
  plural1stPerson: Word('прилепляем', 7),
  plural2ndPerson: Word('прилепляете', 7),
  plural3rdPerson: Word('прилепляют', 7),
  masculinePast: Word('прилеплял', 7),
  femininePast: Word('прилепляла', 7),
  neuterPast: Word('прилепляло', 7),
  pluralPast: Word('прилепляли', 7),
  imperativeInformal: Word('прилепляй', 7),
  imperativeFormal: Word('прилепляйте', 7),
  imperfect: [],
};

perfectVerbs.set(прилеплять.name.text, прилеплять);

export { прилеплять };