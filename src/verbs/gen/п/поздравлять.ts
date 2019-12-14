import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поздравлять: PerfectVerb = {
  name: Word('поздравлять', 8),
  singular1stPerson: Word('поздравляю', 8),
  singular2ndPerson: Word('поздравляешь', 8),
  singular3rdPerson: Word('поздравляет', 8),
  plural1stPerson: Word('поздравляем', 8),
  plural2ndPerson: Word('поздравляете', 8),
  plural3rdPerson: Word('поздравляют', 8),
  masculinePast: Word('поздравлял', 8),
  femininePast: Word('поздравляла', 8),
  neuterPast: Word('поздравляло', 8),
  pluralPast: Word('поздравляли', 8),
  imperativeInformal: Word('поздравляй', 8),
  imperativeFormal: Word('поздравляйте', 8),
  imperfect: ['поздравить'],
};

perfectVerbs.set(поздравлять.name.text, поздравлять);

export { поздравлять };