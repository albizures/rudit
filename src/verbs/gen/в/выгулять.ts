import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выгулять: PerfectVerb = {
  name: Word('выгулять', 1),
  singular1stPerson: Word('выгуляю', 1),
  singular2ndPerson: Word('выгуляешь', 1),
  singular3rdPerson: Word('выгуляет', 1),
  plural1stPerson: Word('выгуляем', 1),
  plural2ndPerson: Word('выгуляете', 1),
  plural3rdPerson: Word('выгуляют', 1),
  masculinePast: Word('выгулял', 1),
  femininePast: Word('выгуляла', 1),
  neuterPast: Word('выгуляло', 1),
  pluralPast: Word('выгуляли', 1),
  imperativeInformal: Word('выгуляй', 1),
  imperativeFormal: Word('выгуляйте', 1),
  imperfect: [],
};

perfectVerbs.set(выгулять.name.text, выгулять);

export { выгулять };