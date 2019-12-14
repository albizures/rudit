import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потреблять: PerfectVerb = {
  name: Word('потреблять', 7),
  singular1stPerson: Word('потребляю', 7),
  singular2ndPerson: Word('потребляешь', 7),
  singular3rdPerson: Word('потребляет', 7),
  plural1stPerson: Word('потребляем', 7),
  plural2ndPerson: Word('потребляете', 7),
  plural3rdPerson: Word('потребляют', 7),
  masculinePast: Word('потреблял', 7),
  femininePast: Word('потребляла', 7),
  neuterPast: Word('потребляло', 7),
  pluralPast: Word('потребляли', 7),
  imperativeInformal: Word('потребляй', 7),
  imperativeFormal: Word('потребляйте', 7),
  imperfect: [],
};

perfectVerbs.set(потреблять.name.text, потреблять);

export { потреблять };