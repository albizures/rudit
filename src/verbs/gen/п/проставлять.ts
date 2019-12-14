import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проставлять: PerfectVerb = {
  name: Word('проставлять', 8),
  singular1stPerson: Word('проставляю', 8),
  singular2ndPerson: Word('проставляешь', 8),
  singular3rdPerson: Word('проставляет', 8),
  plural1stPerson: Word('проставляем', 8),
  plural2ndPerson: Word('проставляете', 8),
  plural3rdPerson: Word('проставляют', 8),
  masculinePast: Word('проставлял', 8),
  femininePast: Word('проставляла', 8),
  neuterPast: Word('проставляло', 8),
  pluralPast: Word('проставляли', 8),
  imperativeInformal: Word('проставляй', 8),
  imperativeFormal: Word('проставляйте', 8),
  imperfect: [],
};

perfectVerbs.set(проставлять.name.text, проставлять);

export { проставлять };