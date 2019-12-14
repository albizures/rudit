import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приземлять: PerfectVerb = {
  name: Word('приземлять', 7),
  singular1stPerson: Word('приземляю', 7),
  singular2ndPerson: Word('приземляешь', 7),
  singular3rdPerson: Word('приземляет', 7),
  plural1stPerson: Word('приземляем', 7),
  plural2ndPerson: Word('приземляете', 7),
  plural3rdPerson: Word('приземляют', 7),
  masculinePast: Word('приземлял', 7),
  femininePast: Word('приземляла', 7),
  neuterPast: Word('приземляло', 7),
  pluralPast: Word('приземляли', 7),
  imperativeInformal: Word('приземляй', 7),
  imperativeFormal: Word('приземляйте', 7),
  imperfect: [],
};

perfectVerbs.set(приземлять.name.text, приземлять);

export { приземлять };