import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затуплять: PerfectVerb = {
  name: Word('затуплять', 6),
  singular1stPerson: Word('затупляю', 6),
  singular2ndPerson: Word('затупляешь', 6),
  singular3rdPerson: Word('затупляет', 6),
  plural1stPerson: Word('затупляем', 6),
  plural2ndPerson: Word('затупляете', 6),
  plural3rdPerson: Word('затупляют', 6),
  masculinePast: Word('затуплял', 6),
  femininePast: Word('затупляла', 6),
  neuterPast: Word('затупляло', 6),
  pluralPast: Word('затупляли', 6),
  imperativeInformal: Word('затупляй', 6),
  imperativeFormal: Word('затупляйте', 6),
  imperfect: [],
};

perfectVerbs.set(затуплять.name.text, затуплять);

export { затуплять };