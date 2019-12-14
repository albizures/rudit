import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const извалять: PerfectVerb = {
  name: Word('извалять', 5),
  singular1stPerson: Word('изваляю', 5),
  singular2ndPerson: Word('изваляешь', 5),
  singular3rdPerson: Word('изваляет', 5),
  plural1stPerson: Word('изваляем', 5),
  plural2ndPerson: Word('изваляете', 5),
  plural3rdPerson: Word('изваляют', 5),
  masculinePast: Word('извалял', 5),
  femininePast: Word('изваляла', 5),
  neuterPast: Word('изваляло', 5),
  pluralPast: Word('изваляли', 5),
  imperativeInformal: Word('изваляй', 5),
  imperativeFormal: Word('изваляйте', 5),
  imperfect: [],
};

perfectVerbs.set(извалять.name.text, извалять);

export { извалять };