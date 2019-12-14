import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const постановлять: PerfectVerb = {
  name: Word('постановлять', 9),
  singular1stPerson: Word('постановляю', 9),
  singular2ndPerson: Word('постановляешь', 9),
  singular3rdPerson: Word('постановляет', 9),
  plural1stPerson: Word('постановляем', 9),
  plural2ndPerson: Word('постановляете', 9),
  plural3rdPerson: Word('постановляют', 9),
  masculinePast: Word('постановлял', 9),
  femininePast: Word('постановляла', 9),
  neuterPast: Word('постановляло', 9),
  pluralPast: Word('постановляли', 9),
  imperativeInformal: Word('постановляй', 9),
  imperativeFormal: Word('постановляйте', 9),
  imperfect: [],
};

perfectVerbs.set(постановлять.name.text, постановлять);

export { постановлять };