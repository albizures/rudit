import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утолять: PerfectVerb = {
  name: Word('утолять', 4),
  singular1stPerson: Word('утоляю', 4),
  singular2ndPerson: Word('утоляешь', 4),
  singular3rdPerson: Word('утоляет', 4),
  plural1stPerson: Word('утоляем', 4),
  plural2ndPerson: Word('утоляете', 4),
  plural3rdPerson: Word('утоляют', 4),
  masculinePast: Word('утолял', 4),
  femininePast: Word('утоляла', 4),
  neuterPast: Word('утоляло', 4),
  pluralPast: Word('утоляли', 4),
  imperativeInformal: Word('утоляй', 4),
  imperativeFormal: Word('утоляйте', 4),
  imperfect: ['утолить'],
};

perfectVerbs.set(утолять.name.text, утолять);

export { утолять };