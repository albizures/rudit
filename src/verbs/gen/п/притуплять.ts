import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const притуплять: PerfectVerb = {
  name: Word('притуплять', 7),
  singular1stPerson: Word('притупляю', 7),
  singular2ndPerson: Word('притупляешь', 7),
  singular3rdPerson: Word('притупляет', 7),
  plural1stPerson: Word('притупляем', 7),
  plural2ndPerson: Word('притупляете', 7),
  plural3rdPerson: Word('притупляют', 7),
  masculinePast: Word('притуплял', 7),
  femininePast: Word('притупляла', 7),
  neuterPast: Word('притупляло', 7),
  pluralPast: Word('притупляли', 7),
  imperativeInformal: Word('притупляй', 7),
  imperativeFormal: Word('притупляйте', 7),
  imperfect: [],
};

perfectVerbs.set(притуплять.name.text, притуплять);

export { притуплять };