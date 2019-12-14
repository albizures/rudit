import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расправлять: PerfectVerb = {
  name: Word('расправлять', 8),
  singular1stPerson: Word('расправляю', 8),
  singular2ndPerson: Word('расправляешь', 8),
  singular3rdPerson: Word('расправляет', 8),
  plural1stPerson: Word('расправляем', 8),
  plural2ndPerson: Word('расправляете', 8),
  plural3rdPerson: Word('расправляют', 8),
  masculinePast: Word('расправлял', 8),
  femininePast: Word('расправляла', 8),
  neuterPast: Word('расправляло', 8),
  pluralPast: Word('расправляли', 8),
  imperativeInformal: Word('расправляй', 8),
  imperativeFormal: Word('расправляйте', 8),
  imperfect: [],
};

perfectVerbs.set(расправлять.name.text, расправлять);

export { расправлять };