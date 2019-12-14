import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отеплять: PerfectVerb = {
  name: Word('отеплять', 5),
  singular1stPerson: Word('отепляю', 5),
  singular2ndPerson: Word('отепляешь', 5),
  singular3rdPerson: Word('отепляет', 5),
  plural1stPerson: Word('отепляем', 5),
  plural2ndPerson: Word('отепляете', 5),
  plural3rdPerson: Word('отепляют', 5),
  masculinePast: Word('отеплял', 5),
  femininePast: Word('отепляла', 5),
  neuterPast: Word('отепляло', 5),
  pluralPast: Word('отепляли', 5),
  imperativeInformal: Word('отепляй', 5),
  imperativeFormal: Word('отепляйте', 5),
  imperfect: [],
};

perfectVerbs.set(отеплять.name.text, отеплять);

export { отеплять };