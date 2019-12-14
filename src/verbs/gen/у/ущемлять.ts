import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ущемлять: PerfectVerb = {
  name: Word('ущемлять', 5),
  singular1stPerson: Word('ущемляю', 5),
  singular2ndPerson: Word('ущемляешь', 5),
  singular3rdPerson: Word('ущемляет', 5),
  plural1stPerson: Word('ущемляем', 5),
  plural2ndPerson: Word('ущемляете', 5),
  plural3rdPerson: Word('ущемляют', 5),
  masculinePast: Word('ущемлял', 5),
  femininePast: Word('ущемляла', 5),
  neuterPast: Word('ущемляло', 5),
  pluralPast: Word('ущемляли', 5),
  imperativeInformal: Word('ущемляй', 5),
  imperativeFormal: Word('ущемляйте', 5),
  imperfect: [],
};

perfectVerbs.set(ущемлять.name.text, ущемлять);

export { ущемлять };