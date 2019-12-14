import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const восславлять: PerfectVerb = {
  name: Word('восславлять', 8),
  singular1stPerson: Word('восславляю', 8),
  singular2ndPerson: Word('восславляешь', 8),
  singular3rdPerson: Word('восславляет', 8),
  plural1stPerson: Word('восславляем', 8),
  plural2ndPerson: Word('восславляете', 8),
  plural3rdPerson: Word('восславляют', 8),
  masculinePast: Word('восславлял', 8),
  femininePast: Word('восславляла', 8),
  neuterPast: Word('восславляло', 8),
  pluralPast: Word('восславляли', 8),
  imperativeInformal: Word('восславляй', 8),
  imperativeFormal: Word('восславляйте', 8),
  imperfect: [],
};

perfectVerbs.set(восславлять.name.text, восславлять);

export { восславлять };