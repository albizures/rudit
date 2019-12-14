import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отожествлять: PerfectVerb = {
  name: Word('отожествлять', 9),
  singular1stPerson: Word('отожествляю', 9),
  singular2ndPerson: Word('отожествляешь', 9),
  singular3rdPerson: Word('отожествляет', 9),
  plural1stPerson: Word('отожествляем', 9),
  plural2ndPerson: Word('отожествляете', 9),
  plural3rdPerson: Word('отожествляют', 9),
  masculinePast: Word('отожествлял', 9),
  femininePast: Word('отожествляла', 9),
  neuterPast: Word('отожествляло', 9),
  pluralPast: Word('отожествляли', 9),
  imperativeInformal: Word('отожествляй', 9),
  imperativeFormal: Word('отожествляйте', 9),
  imperfect: [],
};

perfectVerbs.set(отожествлять.name.text, отожествлять);

export { отожествлять };