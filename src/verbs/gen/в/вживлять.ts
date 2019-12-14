import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вживлять: PerfectVerb = {
  name: Word('вживлять', 5),
  singular1stPerson: Word('вживляю', 5),
  singular2ndPerson: Word('вживляешь', 5),
  singular3rdPerson: Word('вживляет', 5),
  plural1stPerson: Word('вживляем', 5),
  plural2ndPerson: Word('вживляете', 5),
  plural3rdPerson: Word('вживляют', 5),
  masculinePast: Word('вживлял', 5),
  femininePast: Word('вживляла', 5),
  neuterPast: Word('вживляло', 5),
  pluralPast: Word('вживляли', 5),
  imperativeInformal: Word('вживляй', 5),
  imperativeFormal: Word('вживляйте', 5),
  imperfect: [],
};

perfectVerbs.set(вживлять.name.text, вживлять);

export { вживлять };