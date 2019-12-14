import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заковылять: PerfectVerb = {
  name: Word('заковылять', 7),
  singular1stPerson: Word('заковыляю', 7),
  singular2ndPerson: Word('заковыляешь', 7),
  singular3rdPerson: Word('заковыляет', 7),
  plural1stPerson: Word('заковыляем', 7),
  plural2ndPerson: Word('заковыляете', 7),
  plural3rdPerson: Word('заковыляют', 7),
  masculinePast: Word('заковылял', 7),
  femininePast: Word('заковыляла', 7),
  neuterPast: Word('заковыляло', 7),
  pluralPast: Word('заковыляли', 7),
  imperativeInformal: Word('заковыляй', 7),
  imperativeFormal: Word('заковыляйте', 7),
  imperfect: [],
};

perfectVerbs.set(заковылять.name.text, заковылять);

export { заковылять };