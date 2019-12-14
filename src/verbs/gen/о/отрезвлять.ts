import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отрезвлять: PerfectVerb = {
  name: Word('отрезвлять', 7),
  singular1stPerson: Word('отрезвляю', 7),
  singular2ndPerson: Word('отрезвляешь', 7),
  singular3rdPerson: Word('отрезвляет', 7),
  plural1stPerson: Word('отрезвляем', 7),
  plural2ndPerson: Word('отрезвляете', 7),
  plural3rdPerson: Word('отрезвляют', 7),
  masculinePast: Word('отрезвлял', 7),
  femininePast: Word('отрезвляла', 7),
  neuterPast: Word('отрезвляло', 7),
  pluralPast: Word('отрезвляли', 7),
  imperativeInformal: Word('отрезвляй', 7),
  imperativeFormal: Word('отрезвляйте', 7),
  imperfect: [],
};

perfectVerbs.set(отрезвлять.name.text, отрезвлять);

export { отрезвлять };