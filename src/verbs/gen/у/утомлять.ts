import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утомлять: PerfectVerb = {
  name: Word('утомлять', 5),
  singular1stPerson: Word('утомляю', 5),
  singular2ndPerson: Word('утомляешь', 5),
  singular3rdPerson: Word('утомляет', 5),
  plural1stPerson: Word('утомляем', 5),
  plural2ndPerson: Word('утомляете', 5),
  plural3rdPerson: Word('утомляют', 5),
  masculinePast: Word('утомлял', 5),
  femininePast: Word('утомляла', 5),
  neuterPast: Word('утомляло', 5),
  pluralPast: Word('утомляли', 5),
  imperativeInformal: Word('утомляй', 5),
  imperativeFormal: Word('утомляйте', 5),
  imperfect: [],
};

perfectVerbs.set(утомлять.name.text, утомлять);

export { утомлять };