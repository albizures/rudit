import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ознакомлять: PerfectVerb = {
  name: Word('ознакомлять', 8),
  singular1stPerson: Word('ознакомляю', 8),
  singular2ndPerson: Word('ознакомляешь', 8),
  singular3rdPerson: Word('ознакомляет', 8),
  plural1stPerson: Word('ознакомляем', 8),
  plural2ndPerson: Word('ознакомляете', 8),
  plural3rdPerson: Word('ознакомляют', 8),
  masculinePast: Word('ознакомлял', 8),
  femininePast: Word('ознакомляла', 8),
  neuterPast: Word('ознакомляло', 8),
  pluralPast: Word('ознакомляли', 8),
  imperativeInformal: Word('ознакомляй', 8),
  imperativeFormal: Word('ознакомляйте', 8),
  imperfect: [],
};

perfectVerbs.set(ознакомлять.name.text, ознакомлять);

export { ознакомлять };