import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возглавлять: PerfectVerb = {
  name: Word('возглавлять', 8),
  singular1stPerson: Word('возглавляю', 8),
  singular2ndPerson: Word('возглавляешь', 8),
  singular3rdPerson: Word('возглавляет', 8),
  plural1stPerson: Word('возглавляем', 8),
  plural2ndPerson: Word('возглавляете', 8),
  plural3rdPerson: Word('возглавляют', 8),
  masculinePast: Word('возглавлял', 8),
  femininePast: Word('возглавляла', 8),
  neuterPast: Word('возглавляло', 8),
  pluralPast: Word('возглавляли', 8),
  imperativeInformal: Word('возглавляй', 8),
  imperativeFormal: Word('возглавляйте', 8),
  imperfect: ['возглавить'],
};

perfectVerbs.set(возглавлять.name.text, возглавлять);

export { возглавлять };