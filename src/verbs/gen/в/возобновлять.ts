import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возобновлять: PerfectVerb = {
  name: Word('возобновлять', 9),
  singular1stPerson: Word('возобновляю', 9),
  singular2ndPerson: Word('возобновляешь', 9),
  singular3rdPerson: Word('возобновляет', 9),
  plural1stPerson: Word('возобновляем', 9),
  plural2ndPerson: Word('возобновляете', 9),
  plural3rdPerson: Word('возобновляют', 9),
  masculinePast: Word('возобновлял', 9),
  femininePast: Word('возобновляла', 9),
  neuterPast: Word('возобновляло', 9),
  pluralPast: Word('возобновляли', 9),
  imperativeInformal: Word('возобновляй', 9),
  imperativeFormal: Word('возобновляйте', 9),
  imperfect: [],
};

perfectVerbs.set(возобновлять.name.text, возобновлять);

export { возобновлять };