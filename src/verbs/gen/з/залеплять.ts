import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const залеплять: PerfectVerb = {
  name: Word('залеплять', 6),
  singular1stPerson: Word('залепляю', 6),
  singular2ndPerson: Word('залепляешь', 6),
  singular3rdPerson: Word('залепляет', 6),
  plural1stPerson: Word('залепляем', 6),
  plural2ndPerson: Word('залепляете', 6),
  plural3rdPerson: Word('залепляют', 6),
  masculinePast: Word('залеплял', 6),
  femininePast: Word('залепляла', 6),
  neuterPast: Word('залепляло', 6),
  pluralPast: Word('залепляли', 6),
  imperativeInformal: Word('залепляй', 6),
  imperativeFormal: Word('залепляйте', 6),
  imperfect: [],
};

perfectVerbs.set(залеплять.name.text, залеплять);

export { залеплять };