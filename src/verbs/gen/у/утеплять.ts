import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утеплять: PerfectVerb = {
  name: Word('утеплять', 5),
  singular1stPerson: Word('утепляю', 5),
  singular2ndPerson: Word('утепляешь', 5),
  singular3rdPerson: Word('утепляет', 5),
  plural1stPerson: Word('утепляем', 5),
  plural2ndPerson: Word('утепляете', 5),
  plural3rdPerson: Word('утепляют', 5),
  masculinePast: Word('утеплял', 5),
  femininePast: Word('утепляла', 5),
  neuterPast: Word('утепляло', 5),
  pluralPast: Word('утепляли', 5),
  imperativeInformal: Word('утепляй', 5),
  imperativeFormal: Word('утепляйте', 5),
  imperfect: [],
};

perfectVerbs.set(утеплять.name.text, утеплять);

export { утеплять };