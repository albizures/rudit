import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оцеплять: PerfectVerb = {
  name: Word('оцеплять', 5),
  singular1stPerson: Word('оцепляю', 5),
  singular2ndPerson: Word('оцепляешь', 5),
  singular3rdPerson: Word('оцепляет', 5),
  plural1stPerson: Word('оцепляем', 5),
  plural2ndPerson: Word('оцепляете', 5),
  plural3rdPerson: Word('оцепляют', 5),
  masculinePast: Word('оцеплял', 5),
  femininePast: Word('оцепляла', 5),
  neuterPast: Word('оцепляло', 5),
  pluralPast: Word('оцепляли', 5),
  imperativeInformal: Word('оцепляй', 5),
  imperativeFormal: Word('оцепляйте', 5),
  imperfect: [],
};

perfectVerbs.set(оцеплять.name.text, оцеплять);

export { оцеплять };