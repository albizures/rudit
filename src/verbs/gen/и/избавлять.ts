import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const избавлять: PerfectVerb = {
  name: Word('избавлять', 6),
  singular1stPerson: Word('избавляю', 6),
  singular2ndPerson: Word('избавляешь', 6),
  singular3rdPerson: Word('избавляет', 6),
  plural1stPerson: Word('избавляем', 6),
  plural2ndPerson: Word('избавляете', 6),
  plural3rdPerson: Word('избавляют', 6),
  masculinePast: Word('избавлял', 6),
  femininePast: Word('избавляла', 6),
  neuterPast: Word('избавляло', 6),
  pluralPast: Word('избавляли', 6),
  imperativeInformal: Word('избавляй', 6),
  imperativeFormal: Word('избавляйте', 6),
  imperfect: [],
};

perfectVerbs.set(избавлять.name.text, избавлять);

export { избавлять };