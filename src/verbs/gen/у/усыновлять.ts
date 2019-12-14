import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const усыновлять: PerfectVerb = {
  name: Word('усыновлять', 7),
  singular1stPerson: Word('усыновляю', 7),
  singular2ndPerson: Word('усыновляешь', 7),
  singular3rdPerson: Word('усыновляет', 7),
  plural1stPerson: Word('усыновляем', 7),
  plural2ndPerson: Word('усыновляете', 7),
  plural3rdPerson: Word('усыновляют', 7),
  masculinePast: Word('усыновлял', 7),
  femininePast: Word('усыновляла', 7),
  neuterPast: Word('усыновляло', 7),
  pluralPast: Word('усыновляли', 7),
  imperativeInformal: Word('усыновляй', 7),
  imperativeFormal: Word('усыновляйте', 7),
  imperfect: ['усыновить'],
};

perfectVerbs.set(усыновлять.name.text, усыновлять);

export { усыновлять };