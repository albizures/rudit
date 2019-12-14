import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обновлять: PerfectVerb = {
  name: Word('обновлять', 6),
  singular1stPerson: Word('обновляю', 6),
  singular2ndPerson: Word('обновляешь', 6),
  singular3rdPerson: Word('обновляет', 6),
  plural1stPerson: Word('обновляем', 6),
  plural2ndPerson: Word('обновляете', 6),
  plural3rdPerson: Word('обновляют', 6),
  masculinePast: Word('обновлял', 6),
  femininePast: Word('обновляла', 6),
  neuterPast: Word('обновляло', 6),
  pluralPast: Word('обновляли', 6),
  imperativeInformal: Word('обновляй', 6),
  imperativeFormal: Word('обновляйте', 6),
  imperfect: [],
};

perfectVerbs.set(обновлять.name.text, обновлять);

export { обновлять };