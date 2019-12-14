import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const погулять: PerfectVerb = {
  name: Word('погулять', 5),
  singular1stPerson: Word('погуляю', 5),
  singular2ndPerson: Word('погуляешь', 5),
  singular3rdPerson: Word('погуляет', 5),
  plural1stPerson: Word('погуляем', 5),
  plural2ndPerson: Word('погуляете', 5),
  plural3rdPerson: Word('погуляют', 5),
  masculinePast: Word('погулял', 5),
  femininePast: Word('погуляла', 5),
  neuterPast: Word('погуляло', 5),
  pluralPast: Word('погуляли', 5),
  imperativeInformal: Word('погуляй', 5),
  imperativeFormal: Word('погуляйте', 5),
  imperfect: [],
};

perfectVerbs.set(погулять.name.text, погулять);

export { погулять };