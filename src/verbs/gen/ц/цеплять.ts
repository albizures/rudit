import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const цеплять: PerfectVerb = {
  name: Word('цеплять', 4),
  singular1stPerson: Word('цепляю', 4),
  singular2ndPerson: Word('цепляешь', 4),
  singular3rdPerson: Word('цепляет', 4),
  plural1stPerson: Word('цепляем', 4),
  plural2ndPerson: Word('цепляете', 4),
  plural3rdPerson: Word('цепляют', 4),
  masculinePast: Word('цеплял', 4),
  femininePast: Word('цепляла', 4),
  neuterPast: Word('цепляло', 4),
  pluralPast: Word('цепляли', 4),
  imperativeInformal: Word('цепляй', 4),
  imperativeFormal: Word('цепляйте', 4),
  imperfect: [],
};

perfectVerbs.set(цеплять.name.text, цеплять);

export { цеплять };