import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расстрелять: PerfectVerb = {
  name: Word('расстрелять', 8),
  singular1stPerson: Word('расстреляю', 8),
  singular2ndPerson: Word('расстреляешь', 8),
  singular3rdPerson: Word('расстреляет', 8),
  plural1stPerson: Word('расстреляем', 8),
  plural2ndPerson: Word('расстреляете', 8),
  plural3rdPerson: Word('расстреляют', 8),
  masculinePast: Word('расстрелял', 8),
  femininePast: Word('расстреляла', 8),
  neuterPast: Word('расстреляло', 8),
  pluralPast: Word('расстреляли', 8),
  imperativeInformal: Word('расстреляй', 8),
  imperativeFormal: Word('расстреляйте', 8),
  imperfect: [],
};

perfectVerbs.set(расстрелять.name.text, расстрелять);

export { расстрелять };