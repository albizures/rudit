import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оглуплять: PerfectVerb = {
  name: Word('оглуплять', 6),
  singular1stPerson: Word('оглупляю', 6),
  singular2ndPerson: Word('оглупляешь', 6),
  singular3rdPerson: Word('оглупляет', 6),
  plural1stPerson: Word('оглупляем', 6),
  plural2ndPerson: Word('оглупляете', 6),
  plural3rdPerson: Word('оглупляют', 6),
  masculinePast: Word('оглуплял', 6),
  femininePast: Word('оглупляла', 6),
  neuterPast: Word('оглупляло', 6),
  pluralPast: Word('оглупляли', 6),
  imperativeInformal: Word('оглупляй', 6),
  imperativeFormal: Word('оглупляйте', 6),
  imperfect: [],
};

perfectVerbs.set(оглуплять.name.text, оглуплять);

export { оглуплять };