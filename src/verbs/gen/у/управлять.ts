import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const управлять: PerfectVerb = {
  name: Word('управлять', 6),
  singular1stPerson: Word('управляю', 6),
  singular2ndPerson: Word('управляешь', 6),
  singular3rdPerson: Word('управляет', 6),
  plural1stPerson: Word('управляем', 6),
  plural2ndPerson: Word('управляете', 6),
  plural3rdPerson: Word('управляют', 6),
  masculinePast: Word('управлял', 6),
  femininePast: Word('управляла', 6),
  neuterPast: Word('управляло', 6),
  pluralPast: Word('управляли', 6),
  imperativeInformal: Word('управляй', 6),
  imperativeFormal: Word('управляйте', 6),
  imperfect: [],
};

perfectVerbs.set(управлять.name.text, управлять);

export { управлять };