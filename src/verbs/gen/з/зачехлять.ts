import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зачехлять: PerfectVerb = {
  name: Word('зачехлять', 6),
  singular1stPerson: Word('зачехляю', 6),
  singular2ndPerson: Word('зачехляешь', 6),
  singular3rdPerson: Word('зачехляет', 6),
  plural1stPerson: Word('зачехляем', 6),
  plural2ndPerson: Word('зачехляете', 6),
  plural3rdPerson: Word('зачехляют', 6),
  masculinePast: Word('зачехлял', 6),
  femininePast: Word('зачехляла', 6),
  neuterPast: Word('зачехляло', 6),
  pluralPast: Word('зачехляли', 6),
  imperativeInformal: Word('зачехляй', 6),
  imperativeFormal: Word('зачехляйте', 6),
  imperfect: [],
};

perfectVerbs.set(зачехлять.name.text, зачехлять);

export { зачехлять };