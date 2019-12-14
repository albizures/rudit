import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отставлять: PerfectVerb = {
  name: Word('отставлять', 7),
  singular1stPerson: Word('отставляю', 7),
  singular2ndPerson: Word('отставляешь', 7),
  singular3rdPerson: Word('отставляет', 7),
  plural1stPerson: Word('отставляем', 7),
  plural2ndPerson: Word('отставляете', 7),
  plural3rdPerson: Word('отставляют', 7),
  masculinePast: Word('отставлял', 7),
  femininePast: Word('отставляла', 7),
  neuterPast: Word('отставляло', 7),
  pluralPast: Word('отставляли', 7),
  imperativeInformal: Word('отставляй', 7),
  imperativeFormal: Word('отставляйте', 7),
  imperfect: [],
};

perfectVerbs.set(отставлять.name.text, отставлять);

export { отставлять };