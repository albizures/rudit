import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выставлять: PerfectVerb = {
  name: Word('выставлять', 7),
  singular1stPerson: Word('выставляю', 7),
  singular2ndPerson: Word('выставляешь', 7),
  singular3rdPerson: Word('выставляет', 7),
  plural1stPerson: Word('выставляем', 7),
  plural2ndPerson: Word('выставляете', 7),
  plural3rdPerson: Word('выставляют', 7),
  masculinePast: Word('выставлял', 7),
  femininePast: Word('выставляла', 7),
  neuterPast: Word('выставляло', 7),
  pluralPast: Word('выставляли', 7),
  imperativeInformal: Word('выставляй', 7),
  imperativeFormal: Word('выставляйте', 7),
  imperfect: [],
};

perfectVerbs.set(выставлять.name.text, выставлять);

export { выставлять };