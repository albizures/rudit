import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расщеплять: PerfectVerb = {
  name: Word('расщеплять', 7),
  singular1stPerson: Word('расщепляю', 7),
  singular2ndPerson: Word('расщепляешь', 7),
  singular3rdPerson: Word('расщепляет', 7),
  plural1stPerson: Word('расщепляем', 7),
  plural2ndPerson: Word('расщепляете', 7),
  plural3rdPerson: Word('расщепляют', 7),
  masculinePast: Word('расщеплял', 7),
  femininePast: Word('расщепляла', 7),
  neuterPast: Word('расщепляло', 7),
  pluralPast: Word('расщепляли', 7),
  imperativeInformal: Word('расщепляй', 7),
  imperativeFormal: Word('расщепляйте', 7),
  imperfect: [],
};

perfectVerbs.set(расщеплять.name.text, расщеплять);

export { расщеплять };