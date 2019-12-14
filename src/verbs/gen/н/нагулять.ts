import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нагулять: PerfectVerb = {
  name: Word('нагулять', 5),
  singular1stPerson: Word('нагуляю', 5),
  singular2ndPerson: Word('нагуляешь', 5),
  singular3rdPerson: Word('нагуляет', 5),
  plural1stPerson: Word('нагуляем', 5),
  plural2ndPerson: Word('нагуляете', 5),
  plural3rdPerson: Word('нагуляют', 5),
  masculinePast: Word('нагулял', 5),
  femininePast: Word('нагуляла', 5),
  neuterPast: Word('нагуляло', 5),
  pluralPast: Word('нагуляли', 5),
  imperativeInformal: Word('нагуляй', 5),
  imperativeFormal: Word('нагуляйте', 5),
  imperfect: [],
};

perfectVerbs.set(нагулять.name.text, нагулять);

export { нагулять };