import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расплавлять: PerfectVerb = {
  name: Word('расплавлять', 8),
  singular1stPerson: Word('расплавляю', 8),
  singular2ndPerson: Word('расплавляешь', 8),
  singular3rdPerson: Word('расплавляет', 8),
  plural1stPerson: Word('расплавляем', 8),
  plural2ndPerson: Word('расплавляете', 8),
  plural3rdPerson: Word('расплавляют', 8),
  masculinePast: Word('расплавлял', 8),
  femininePast: Word('расплавляла', 8),
  neuterPast: Word('расплавляло', 8),
  pluralPast: Word('расплавляли', 8),
  imperativeInformal: Word('расплавляй', 8),
  imperativeFormal: Word('расплавляйте', 8),
  imperfect: [],
};

perfectVerbs.set(расплавлять.name.text, расплавлять);

export { расплавлять };