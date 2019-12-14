import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заземлять: PerfectVerb = {
  name: Word('заземлять', 6),
  singular1stPerson: Word('заземляю', 6),
  singular2ndPerson: Word('заземляешь', 6),
  singular3rdPerson: Word('заземляет', 6),
  plural1stPerson: Word('заземляем', 6),
  plural2ndPerson: Word('заземляете', 6),
  plural3rdPerson: Word('заземляют', 6),
  masculinePast: Word('заземлял', 6),
  femininePast: Word('заземляла', 6),
  neuterPast: Word('заземляло', 6),
  pluralPast: Word('заземляли', 6),
  imperativeInformal: Word('заземляй', 6),
  imperativeFormal: Word('заземляйте', 6),
  imperfect: [],
};

perfectVerbs.set(заземлять.name.text, заземлять);

export { заземлять };