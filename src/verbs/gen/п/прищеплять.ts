import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прищеплять: PerfectVerb = {
  name: Word('прищеплять', 7),
  singular1stPerson: Word('прищепляю', 7),
  singular2ndPerson: Word('прищепляешь', 7),
  singular3rdPerson: Word('прищепляет', 7),
  plural1stPerson: Word('прищепляем', 7),
  plural2ndPerson: Word('прищепляете', 7),
  plural3rdPerson: Word('прищепляют', 7),
  masculinePast: Word('прищеплял', 7),
  femininePast: Word('прищепляла', 7),
  neuterPast: Word('прищепляло', 7),
  pluralPast: Word('прищепляли', 7),
  imperativeInformal: Word('прищепляй', 7),
  imperativeFormal: Word('прищепляйте', 7),
  imperfect: [],
};

perfectVerbs.set(прищеплять.name.text, прищеплять);

export { прищеплять };