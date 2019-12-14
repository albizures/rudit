import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расчехлять: PerfectVerb = {
  name: Word('расчехлять', 7),
  singular1stPerson: Word('расчехляю', 7),
  singular2ndPerson: Word('расчехляешь', 7),
  singular3rdPerson: Word('расчехляет', 7),
  plural1stPerson: Word('расчехляем', 7),
  plural2ndPerson: Word('расчехляете', 7),
  plural3rdPerson: Word('расчехляют', 7),
  masculinePast: Word('расчехлял', 7),
  femininePast: Word('расчехляла', 7),
  neuterPast: Word('расчехляло', 7),
  pluralPast: Word('расчехляли', 7),
  imperativeInformal: Word('расчехляй', 7),
  imperativeFormal: Word('расчехляйте', 7),
  imperfect: [],
};

perfectVerbs.set(расчехлять.name.text, расчехлять);

export { расчехлять };