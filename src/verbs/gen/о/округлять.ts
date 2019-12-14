import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const округлять: PerfectVerb = {
  name: Word('округлять', 6),
  singular1stPerson: Word('округляю', 6),
  singular2ndPerson: Word('округляешь', 6),
  singular3rdPerson: Word('округляет', 6),
  plural1stPerson: Word('округляем', 6),
  plural2ndPerson: Word('округляете', 6),
  plural3rdPerson: Word('округляют', 6),
  masculinePast: Word('округлял', 6),
  femininePast: Word('округляла', 6),
  neuterPast: Word('округляло', 6),
  pluralPast: Word('округляли', 6),
  imperativeInformal: Word('округляй', 6),
  imperativeFormal: Word('округляйте', 6),
  imperfect: [],
};

perfectVerbs.set(округлять.name.text, округлять);

export { округлять };