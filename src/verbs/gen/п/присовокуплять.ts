import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const присовокуплять: PerfectVerb = {
  name: Word('присовокуплять', 11),
  singular1stPerson: Word('присовокупляю', 11),
  singular2ndPerson: Word('присовокупляешь', 11),
  singular3rdPerson: Word('присовокупляет', 11),
  plural1stPerson: Word('присовокупляем', 11),
  plural2ndPerson: Word('присовокупляете', 11),
  plural3rdPerson: Word('присовокупляют', 11),
  masculinePast: Word('присовокуплял', 11),
  femininePast: Word('присовокупляла', 11),
  neuterPast: Word('присовокупляло', 11),
  pluralPast: Word('присовокупляли', 11),
  imperativeInformal: Word('присовокупляй', 11),
  imperativeFormal: Word('присовокупляйте', 11),
  imperfect: [],
};

perfectVerbs.set(присовокуплять.name.text, присовокуплять);

export { присовокуплять };