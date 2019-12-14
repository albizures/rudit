import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскалять: PerfectVerb = {
  name: Word('раскалять', 6),
  singular1stPerson: Word('раскаляю', 6),
  singular2ndPerson: Word('раскаляешь', 6),
  singular3rdPerson: Word('раскаляет', 6),
  plural1stPerson: Word('раскаляем', 6),
  plural2ndPerson: Word('раскаляете', 6),
  plural3rdPerson: Word('раскаляют', 6),
  masculinePast: Word('раскалял', 6),
  femininePast: Word('раскаляла', 6),
  neuterPast: Word('раскаляло', 6),
  pluralPast: Word('раскаляли', 6),
  imperativeInformal: Word('раскаляй', 6),
  imperativeFormal: Word('раскаляйте', 6),
  imperfect: [],
};

perfectVerbs.set(раскалять.name.text, раскалять);

export { раскалять };