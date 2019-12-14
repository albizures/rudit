import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выправлять: PerfectVerb = {
  name: Word('выправлять', 7),
  singular1stPerson: Word('выправляю', 7),
  singular2ndPerson: Word('выправляешь', 7),
  singular3rdPerson: Word('выправляет', 7),
  plural1stPerson: Word('выправляем', 7),
  plural2ndPerson: Word('выправляете', 7),
  plural3rdPerson: Word('выправляют', 7),
  masculinePast: Word('выправлял', 7),
  femininePast: Word('выправляла', 7),
  neuterPast: Word('выправляло', 7),
  pluralPast: Word('выправляли', 7),
  imperativeInformal: Word('выправляй', 7),
  imperativeFormal: Word('выправляйте', 7),
  imperfect: [],
};

perfectVerbs.set(выправлять.name.text, выправлять);

export { выправлять };