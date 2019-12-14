import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const восставлять: PerfectVerb = {
  name: Word('восставлять', 8),
  singular1stPerson: Word('восставляю', 8),
  singular2ndPerson: Word('восставляешь', 8),
  singular3rdPerson: Word('восставляет', 8),
  plural1stPerson: Word('восставляем', 8),
  plural2ndPerson: Word('восставляете', 8),
  plural3rdPerson: Word('восставляют', 8),
  masculinePast: Word('восставлял', 8),
  femininePast: Word('восставляла', 8),
  neuterPast: Word('восставляло', 8),
  pluralPast: Word('восставляли', 8),
  imperativeInformal: Word('восставляй', 8),
  imperativeFormal: Word('восставляйте', 8),
  imperfect: [],
};

perfectVerbs.set(восставлять.name.text, восставлять);

export { восставлять };