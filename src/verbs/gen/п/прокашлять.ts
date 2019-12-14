import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прокашлять: PerfectVerb = {
  name: Word('прокашлять', 4),
  singular1stPerson: Word('прокашляю', 4),
  singular2ndPerson: Word('прокашляешь', 4),
  singular3rdPerson: Word('прокашляет', 4),
  plural1stPerson: Word('прокашляем', 4),
  plural2ndPerson: Word('прокашляете', 4),
  plural3rdPerson: Word('прокашляют', 4),
  masculinePast: Word('прокашлял', 4),
  femininePast: Word('прокашляла', 4),
  neuterPast: Word('прокашляло', 4),
  pluralPast: Word('прокашляли', 4),
  imperativeInformal: Word('прокашляй', 4),
  imperativeFormal: Word('прокашляйте', 4),
  imperfect: [],
};

perfectVerbs.set(прокашлять.name.text, прокашлять);

export { прокашлять };