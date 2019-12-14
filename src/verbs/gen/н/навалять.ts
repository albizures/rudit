import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const навалять: PerfectVerb = {
  name: Word('навалять', 5),
  singular1stPerson: Word('наваляю', 5),
  singular2ndPerson: Word('наваляешь', 5),
  singular3rdPerson: Word('наваляет', 5),
  plural1stPerson: Word('наваляем', 5),
  plural2ndPerson: Word('наваляете', 5),
  plural3rdPerson: Word('наваляют', 5),
  masculinePast: Word('навалял', 5),
  femininePast: Word('наваляла', 5),
  neuterPast: Word('наваляло', 5),
  pluralPast: Word('наваляли', 5),
  imperativeInformal: Word('наваляй', 5),
  imperativeFormal: Word('наваляйте', 5),
  imperfect: [],
};

perfectVerbs.set(навалять.name.text, навалять);

export { навалять };