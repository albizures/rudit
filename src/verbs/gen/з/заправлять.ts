import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заправлять: PerfectVerb = {
  name: Word('заправлять', 7),
  singular1stPerson: Word('заправляю', 7),
  singular2ndPerson: Word('заправляешь', 7),
  singular3rdPerson: Word('заправляет', 7),
  plural1stPerson: Word('заправляем', 7),
  plural2ndPerson: Word('заправляете', 7),
  plural3rdPerson: Word('заправляют', 7),
  masculinePast: Word('заправлял', 7),
  femininePast: Word('заправляла', 7),
  neuterPast: Word('заправляло', 7),
  pluralPast: Word('заправляли', 7),
  imperativeInformal: Word('заправляй', 7),
  imperativeFormal: Word('заправляйте', 7),
  imperfect: [],
};

perfectVerbs.set(заправлять.name.text, заправлять);

export { заправлять };