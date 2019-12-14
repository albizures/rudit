import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заживлять: PerfectVerb = {
  name: Word('заживлять', 6),
  singular1stPerson: Word('заживляю', 6),
  singular2ndPerson: Word('заживляешь', 6),
  singular3rdPerson: Word('заживляет', 6),
  plural1stPerson: Word('заживляем', 6),
  plural2ndPerson: Word('заживляете', 6),
  plural3rdPerson: Word('заживляют', 6),
  masculinePast: Word('заживлял', 6),
  femininePast: Word('заживляла', 6),
  neuterPast: Word('заживляло', 6),
  pluralPast: Word('заживляли', 6),
  imperativeInformal: Word('заживляй', 6),
  imperativeFormal: Word('заживляйте', 6),
  imperfect: [],
};

perfectVerbs.set(заживлять.name.text, заживлять);

export { заживлять };