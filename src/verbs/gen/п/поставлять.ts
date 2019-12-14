import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поставлять: PerfectVerb = {
  name: Word('поставлять', 7),
  singular1stPerson: Word('поставляю', 7),
  singular2ndPerson: Word('поставляешь', 7),
  singular3rdPerson: Word('поставляет', 7),
  plural1stPerson: Word('поставляем', 7),
  plural2ndPerson: Word('поставляете', 7),
  plural3rdPerson: Word('поставляют', 7),
  masculinePast: Word('поставлял', 7),
  femininePast: Word('поставляла', 7),
  neuterPast: Word('поставляло', 7),
  pluralPast: Word('поставляли', 7),
  imperativeInformal: Word('поставляй', 7),
  imperativeFormal: Word('поставляйте', 7),
  imperfect: [],
};

perfectVerbs.set(поставлять.name.text, поставлять);

export { поставлять };