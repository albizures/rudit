import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зачислять: PerfectVerb = {
  name: Word('зачислять', 6),
  singular1stPerson: Word('зачисляю', 6),
  singular2ndPerson: Word('зачисляешь', 6),
  singular3rdPerson: Word('зачисляет', 6),
  plural1stPerson: Word('зачисляем', 6),
  plural2ndPerson: Word('зачисляете', 6),
  plural3rdPerson: Word('зачисляют', 6),
  masculinePast: Word('зачислял', 6),
  femininePast: Word('зачисляла', 6),
  neuterPast: Word('зачисляло', 6),
  pluralPast: Word('зачисляли', 6),
  imperativeInformal: Word('зачисляй', 6),
  imperativeFormal: Word('зачисляйте', 6),
  imperfect: [],
};

perfectVerbs.set(зачислять.name.text, зачислять);

export { зачислять };