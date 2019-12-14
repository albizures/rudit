import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прогулять: PerfectVerb = {
  name: Word('прогулять', 6),
  singular1stPerson: Word('прогуляю', 6),
  singular2ndPerson: Word('прогуляешь', 6),
  singular3rdPerson: Word('прогуляет', 6),
  plural1stPerson: Word('прогуляем', 6),
  plural2ndPerson: Word('прогуляете', 6),
  plural3rdPerson: Word('прогуляют', 6),
  masculinePast: Word('прогулял', 6),
  femininePast: Word('прогуляла', 6),
  neuterPast: Word('прогуляло', 6),
  pluralPast: Word('прогуляли', 6),
  imperativeInformal: Word('прогуляй', 6),
  imperativeFormal: Word('прогуляйте', 6),
  imperfect: [],
};

perfectVerbs.set(прогулять.name.text, прогулять);

export { прогулять };