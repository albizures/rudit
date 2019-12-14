import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расслаблять: PerfectVerb = {
  name: Word('расслаблять', 8),
  singular1stPerson: Word('расслабляю', 8),
  singular2ndPerson: Word('расслабляешь', 8),
  singular3rdPerson: Word('расслабляет', 8),
  plural1stPerson: Word('расслабляем', 8),
  plural2ndPerson: Word('расслабляете', 8),
  plural3rdPerson: Word('расслабляют', 8),
  masculinePast: Word('расслаблял', 8),
  femininePast: Word('расслабляла', 8),
  neuterPast: Word('расслабляло', 8),
  pluralPast: Word('расслабляли', 8),
  imperativeInformal: Word('расслабляй', 8),
  imperativeFormal: Word('расслабляйте', 8),
  imperfect: [],
};

perfectVerbs.set(расслаблять.name.text, расслаблять);

export { расслаблять };