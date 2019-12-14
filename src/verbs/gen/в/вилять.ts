import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вилять: PerfectVerb = {
  name: Word('вилять', 3),
  singular1stPerson: Word('виляю', 3),
  singular2ndPerson: Word('виляешь', 3),
  singular3rdPerson: Word('виляет', 3),
  plural1stPerson: Word('виляем', 3),
  plural2ndPerson: Word('виляете', 3),
  plural3rdPerson: Word('виляют', 3),
  masculinePast: Word('вилял', 3),
  femininePast: Word('виляла', 3),
  neuterPast: Word('виляло', 3),
  pluralPast: Word('виляли', 3),
  imperativeInformal: Word('виляй', 3),
  imperativeFormal: Word('виляйте', 3),
  imperfect: [],
};

perfectVerbs.set(вилять.name.text, вилять);

export { вилять };