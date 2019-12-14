import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расцеплять: PerfectVerb = {
  name: Word('расцеплять', 7),
  singular1stPerson: Word('расцепляю', 7),
  singular2ndPerson: Word('расцепляешь', 7),
  singular3rdPerson: Word('расцепляет', 7),
  plural1stPerson: Word('расцепляем', 7),
  plural2ndPerson: Word('расцепляете', 7),
  plural3rdPerson: Word('расцепляют', 7),
  masculinePast: Word('расцеплял', 7),
  femininePast: Word('расцепляла', 7),
  neuterPast: Word('расцепляло', 7),
  pluralPast: Word('расцепляли', 7),
  imperativeInformal: Word('расцепляй', 7),
  imperativeFormal: Word('расцепляйте', 7),
  imperfect: [],
};

perfectVerbs.set(расцеплять.name.text, расцеплять);

export { расцеплять };