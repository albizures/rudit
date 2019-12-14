import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сбавлять: PerfectVerb = {
  name: Word('сбавлять', 5),
  singular1stPerson: Word('сбавляю', 5),
  singular2ndPerson: Word('сбавляешь', 5),
  singular3rdPerson: Word('сбавляет', 5),
  plural1stPerson: Word('сбавляем', 5),
  plural2ndPerson: Word('сбавляете', 5),
  plural3rdPerson: Word('сбавляют', 5),
  masculinePast: Word('сбавлял', 5),
  femininePast: Word('сбавляла', 5),
  neuterPast: Word('сбавляло', 5),
  pluralPast: Word('сбавляли', 5),
  imperativeInformal: Word('сбавляй', 5),
  imperativeFormal: Word('сбавляйте', 5),
  imperfect: [],
};

perfectVerbs.set(сбавлять.name.text, сбавлять);

export { сбавлять };