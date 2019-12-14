import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отщеплять: PerfectVerb = {
  name: Word('отщеплять', 6),
  singular1stPerson: Word('отщепляю', 6),
  singular2ndPerson: Word('отщепляешь', 6),
  singular3rdPerson: Word('отщепляет', 6),
  plural1stPerson: Word('отщепляем', 6),
  plural2ndPerson: Word('отщепляете', 6),
  plural3rdPerson: Word('отщепляют', 6),
  masculinePast: Word('отщеплял', 6),
  femininePast: Word('отщепляла', 6),
  neuterPast: Word('отщепляло', 6),
  pluralPast: Word('отщепляли', 6),
  imperativeInformal: Word('отщепляй', 6),
  imperativeFormal: Word('отщепляйте', 6),
  imperfect: [],
};

perfectVerbs.set(отщеплять.name.text, отщеплять);

export { отщеплять };