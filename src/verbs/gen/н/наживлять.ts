import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наживлять: PerfectVerb = {
  name: Word('наживлять', 6),
  singular1stPerson: Word('наживляю', 6),
  singular2ndPerson: Word('наживляешь', 6),
  singular3rdPerson: Word('наживляет', 6),
  plural1stPerson: Word('наживляем', 6),
  plural2ndPerson: Word('наживляете', 6),
  plural3rdPerson: Word('наживляют', 6),
  masculinePast: Word('наживлял', 6),
  femininePast: Word('наживляла', 6),
  neuterPast: Word('наживляло', 6),
  pluralPast: Word('наживляли', 6),
  imperativeInformal: Word('наживляй', 6),
  imperativeFormal: Word('наживляйте', 6),
  imperfect: [],
};

perfectVerbs.set(наживлять.name.text, наживлять);

export { наживлять };