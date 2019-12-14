import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const овеществлять: PerfectVerb = {
  name: Word('овеществлять', 9),
  singular1stPerson: Word('овеществляю', 9),
  singular2ndPerson: Word('овеществляешь', 9),
  singular3rdPerson: Word('овеществляет', 9),
  plural1stPerson: Word('овеществляем', 9),
  plural2ndPerson: Word('овеществляете', 9),
  plural3rdPerson: Word('овеществляют', 9),
  masculinePast: Word('овеществлял', 9),
  femininePast: Word('овеществляла', 9),
  neuterPast: Word('овеществляло', 9),
  pluralPast: Word('овеществляли', 9),
  imperativeInformal: Word('овеществляй', 9),
  imperativeFormal: Word('овеществляйте', 9),
  imperfect: [],
};

perfectVerbs.set(овеществлять.name.text, овеществлять);

export { овеществлять };