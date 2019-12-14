import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выпрямлять: PerfectVerb = {
  name: Word('выпрямлять', 7),
  singular1stPerson: Word('выпрямляю', 7),
  singular2ndPerson: Word('выпрямляешь', 7),
  singular3rdPerson: Word('выпрямляет', 7),
  plural1stPerson: Word('выпрямляем', 7),
  plural2ndPerson: Word('выпрямляете', 7),
  plural3rdPerson: Word('выпрямляют', 7),
  masculinePast: Word('выпрямлял', 7),
  femininePast: Word('выпрямляла', 7),
  neuterPast: Word('выпрямляло', 7),
  pluralPast: Word('выпрямляли', 7),
  imperativeInformal: Word('выпрямляй', 7),
  imperativeFormal: Word('выпрямляйте', 7),
  imperfect: [],
};

perfectVerbs.set(выпрямлять.name.text, выпрямлять);

export { выпрямлять };