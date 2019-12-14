import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const исчислять: PerfectVerb = {
  name: Word('исчислять', 6),
  singular1stPerson: Word('исчисляю', 6),
  singular2ndPerson: Word('исчисляешь', 6),
  singular3rdPerson: Word('исчисляет', 6),
  plural1stPerson: Word('исчисляем', 6),
  plural2ndPerson: Word('исчисляете', 6),
  plural3rdPerson: Word('исчисляют', 6),
  masculinePast: Word('исчислял', 6),
  femininePast: Word('исчисляла', 6),
  neuterPast: Word('исчисляло', 6),
  pluralPast: Word('исчисляли', 6),
  imperativeInformal: Word('исчисляй', 6),
  imperativeFormal: Word('исчисляйте', 6),
  imperfect: [],
};

perfectVerbs.set(исчислять.name.text, исчислять);

export { исчислять };