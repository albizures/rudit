import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приготовлять: PerfectVerb = {
  name: Word('приготовлять', 9),
  singular1stPerson: Word('приготовляю', 9),
  singular2ndPerson: Word('приготовляешь', 9),
  singular3rdPerson: Word('приготовляет', 9),
  plural1stPerson: Word('приготовляем', 9),
  plural2ndPerson: Word('приготовляете', 9),
  plural3rdPerson: Word('приготовляют', 9),
  masculinePast: Word('приготовлял', 9),
  femininePast: Word('приготовляла', 9),
  neuterPast: Word('приготовляло', 9),
  pluralPast: Word('приготовляли', 9),
  imperativeInformal: Word('приготовляй', 9),
  imperativeFormal: Word('приготовляйте', 9),
  imperfect: [],
};

perfectVerbs.set(приготовлять.name.text, приготовлять);

export { приготовлять };