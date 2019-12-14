import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окаймлять: PerfectVerb = {
  name: Word('окаймлять', 6),
  singular1stPerson: Word('окаймляю', 6),
  singular2ndPerson: Word('окаймляешь', 6),
  singular3rdPerson: Word('окаймляет', 6),
  plural1stPerson: Word('окаймляем', 6),
  plural2ndPerson: Word('окаймляете', 6),
  plural3rdPerson: Word('окаймляют', 6),
  masculinePast: Word('окаймлял', 6),
  femininePast: Word('окаймляла', 6),
  neuterPast: Word('окаймляло', 6),
  pluralPast: Word('окаймляли', 6),
  imperativeInformal: Word('окаймляй', 6),
  imperativeFormal: Word('окаймляйте', 6),
  imperfect: [],
};

perfectVerbs.set(окаймлять.name.text, окаймлять);

export { окаймлять };