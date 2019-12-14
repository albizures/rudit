import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ковылять: PerfectVerb = {
  name: Word('ковылять', 5),
  singular1stPerson: Word('ковыляю', 5),
  singular2ndPerson: Word('ковыляешь', 5),
  singular3rdPerson: Word('ковыляет', 5),
  plural1stPerson: Word('ковыляем', 5),
  plural2ndPerson: Word('ковыляете', 5),
  plural3rdPerson: Word('ковыляют', 5),
  masculinePast: Word('ковылял', 5),
  femininePast: Word('ковыляла', 5),
  neuterPast: Word('ковыляло', 5),
  pluralPast: Word('ковыляли', 5),
  imperativeInformal: Word('ковыляй', 5),
  imperativeFormal: Word('ковыляйте', 5),
  imperfect: [],
};

perfectVerbs.set(ковылять.name.text, ковылять);

export { ковылять };