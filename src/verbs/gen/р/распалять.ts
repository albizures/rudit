import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распалять: PerfectVerb = {
  name: Word('распалять', 6),
  singular1stPerson: Word('распаляю', 6),
  singular2ndPerson: Word('распаляешь', 6),
  singular3rdPerson: Word('распаляет', 6),
  plural1stPerson: Word('распаляем', 6),
  plural2ndPerson: Word('распаляете', 6),
  plural3rdPerson: Word('распаляют', 6),
  masculinePast: Word('распалял', 6),
  femininePast: Word('распаляла', 6),
  neuterPast: Word('распаляло', 6),
  pluralPast: Word('распаляли', 6),
  imperativeInformal: Word('распаляй', 6),
  imperativeFormal: Word('распаляйте', 6),
  imperfect: [],
};

perfectVerbs.set(распалять.name.text, распалять);

export { распалять };