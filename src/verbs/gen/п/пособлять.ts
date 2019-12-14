import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пособлять: PerfectVerb = {
  name: Word('пособлять', 6),
  singular1stPerson: Word('пособляю', 6),
  singular2ndPerson: Word('пособляешь', 6),
  singular3rdPerson: Word('пособляет', 6),
  plural1stPerson: Word('пособляем', 6),
  plural2ndPerson: Word('пособляете', 6),
  plural3rdPerson: Word('пособляют', 6),
  masculinePast: Word('пособлял', 6),
  femininePast: Word('пособляла', 6),
  neuterPast: Word('пособляло', 6),
  pluralPast: Word('пособляли', 6),
  imperativeInformal: Word('пособляй', 6),
  imperativeFormal: Word('пособляйте', 6),
  imperfect: [],
};

perfectVerbs.set(пособлять.name.text, пособлять);

export { пособлять };