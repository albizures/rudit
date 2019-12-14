import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const застеклять: PerfectVerb = {
  name: Word('застеклять', 7),
  singular1stPerson: Word('застекляю', 7),
  singular2ndPerson: Word('застекляешь', 7),
  singular3rdPerson: Word('застекляет', 7),
  plural1stPerson: Word('застекляем', 7),
  plural2ndPerson: Word('застекляете', 7),
  plural3rdPerson: Word('застекляют', 7),
  masculinePast: Word('застеклял', 7),
  femininePast: Word('застекляла', 7),
  neuterPast: Word('застекляло', 7),
  pluralPast: Word('застекляли', 7),
  imperativeInformal: Word('застекляй', 7),
  imperativeFormal: Word('застекляйте', 7),
  imperfect: [],
};

perfectVerbs.set(застеклять.name.text, застеклять);

export { застеклять };