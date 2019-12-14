import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замедлять: PerfectVerb = {
  name: Word('замедлять', 6),
  singular1stPerson: Word('замедляю', 6),
  singular2ndPerson: Word('замедляешь', 6),
  singular3rdPerson: Word('замедляет', 6),
  plural1stPerson: Word('замедляем', 6),
  plural2ndPerson: Word('замедляете', 6),
  plural3rdPerson: Word('замедляют', 6),
  masculinePast: Word('замедлял', 6),
  femininePast: Word('замедляла', 6),
  neuterPast: Word('замедляло', 6),
  pluralPast: Word('замедляли', 6),
  imperativeInformal: Word('замедляй', 6),
  imperativeFormal: Word('замедляйте', 6),
  imperfect: [],
};

perfectVerbs.set(замедлять.name.text, замедлять);

export { замедлять };