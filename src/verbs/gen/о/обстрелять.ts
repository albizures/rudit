import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обстрелять: PerfectVerb = {
  name: Word('обстрелять', 7),
  singular1stPerson: Word('обстреляю', 7),
  singular2ndPerson: Word('обстреляешь', 7),
  singular3rdPerson: Word('обстреляет', 7),
  plural1stPerson: Word('обстреляем', 7),
  plural2ndPerson: Word('обстреляете', 7),
  plural3rdPerson: Word('обстреляют', 7),
  masculinePast: Word('обстрелял', 7),
  femininePast: Word('обстреляла', 7),
  neuterPast: Word('обстреляло', 7),
  pluralPast: Word('обстреляли', 7),
  imperativeInformal: Word('обстреляй', 7),
  imperativeFormal: Word('обстреляйте', 7),
  imperfect: [],
};

perfectVerbs.set(обстрелять.name.text, обстрелять);

export { обстрелять };