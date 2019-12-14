import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повалять: PerfectVerb = {
  name: Word('повалять', 5),
  singular1stPerson: Word('поваляю', 5),
  singular2ndPerson: Word('поваляешь', 5),
  singular3rdPerson: Word('поваляет', 5),
  plural1stPerson: Word('поваляем', 5),
  plural2ndPerson: Word('поваляете', 5),
  plural3rdPerson: Word('поваляют', 5),
  masculinePast: Word('повалял', 5),
  femininePast: Word('поваляла', 5),
  neuterPast: Word('поваляло', 5),
  pluralPast: Word('поваляли', 5),
  imperativeInformal: Word('поваляй', 5),
  imperativeFormal: Word('поваляйте', 5),
  imperfect: [],
};

perfectVerbs.set(повалять.name.text, повалять);

export { повалять };