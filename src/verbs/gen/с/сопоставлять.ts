import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сопоставлять: PerfectVerb = {
  name: Word('сопоставлять', 9),
  singular1stPerson: Word('сопоставляю', 9),
  singular2ndPerson: Word('сопоставляешь', 9),
  singular3rdPerson: Word('сопоставляет', 9),
  plural1stPerson: Word('сопоставляем', 9),
  plural2ndPerson: Word('сопоставляете', 9),
  plural3rdPerson: Word('сопоставляют', 9),
  masculinePast: Word('сопоставлял', 9),
  femininePast: Word('сопоставляла', 9),
  neuterPast: Word('сопоставляло', 9),
  pluralPast: Word('сопоставляли', 9),
  imperativeInformal: Word('сопоставляй', 9),
  imperativeFormal: Word('сопоставляйте', 9),
  imperfect: [],
};

perfectVerbs.set(сопоставлять.name.text, сопоставлять);

export { сопоставлять };