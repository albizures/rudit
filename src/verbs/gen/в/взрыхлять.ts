import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взрыхлять: PerfectVerb = {
  name: Word('взрыхлять', 6),
  singular1stPerson: Word('взрыхляю', 6),
  singular2ndPerson: Word('взрыхляешь', 6),
  singular3rdPerson: Word('взрыхляет', 6),
  plural1stPerson: Word('взрыхляем', 6),
  plural2ndPerson: Word('взрыхляете', 6),
  plural3rdPerson: Word('взрыхляют', 6),
  masculinePast: Word('взрыхлял', 6),
  femininePast: Word('взрыхляла', 6),
  neuterPast: Word('взрыхляло', 6),
  pluralPast: Word('взрыхляли', 6),
  imperativeInformal: Word('взрыхляй', 6),
  imperativeFormal: Word('взрыхляйте', 6),
  imperfect: [],
};

perfectVerbs.set(взрыхлять.name.text, взрыхлять);

export { взрыхлять };