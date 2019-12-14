import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приживлять: PerfectVerb = {
  name: Word('приживлять', 7),
  singular1stPerson: Word('приживляю', 7),
  singular2ndPerson: Word('приживляешь', 7),
  singular3rdPerson: Word('приживляет', 7),
  plural1stPerson: Word('приживляем', 7),
  plural2ndPerson: Word('приживляете', 7),
  plural3rdPerson: Word('приживляют', 7),
  masculinePast: Word('приживлял', 7),
  femininePast: Word('приживляла', 7),
  neuterPast: Word('приживляло', 7),
  pluralPast: Word('приживляли', 7),
  imperativeInformal: Word('приживляй', 7),
  imperativeFormal: Word('приживляйте', 7),
  imperfect: [],
};

perfectVerbs.set(приживлять.name.text, приживлять);

export { приживлять };