import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отчислять: PerfectVerb = {
  name: Word('отчислять', 6),
  singular1stPerson: Word('отчисляю', 6),
  singular2ndPerson: Word('отчисляешь', 6),
  singular3rdPerson: Word('отчисляет', 6),
  plural1stPerson: Word('отчисляем', 6),
  plural2ndPerson: Word('отчисляете', 6),
  plural3rdPerson: Word('отчисляют', 6),
  masculinePast: Word('отчислял', 6),
  femininePast: Word('отчисляла', 6),
  neuterPast: Word('отчисляло', 6),
  pluralPast: Word('отчисляли', 6),
  imperativeInformal: Word('отчисляй', 6),
  imperativeFormal: Word('отчисляйте', 6),
  imperfect: [],
};

perfectVerbs.set(отчислять.name.text, отчислять);

export { отчислять };