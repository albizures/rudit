import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отбавлять: PerfectVerb = {
  name: Word('отбавлять', 6),
  singular1stPerson: Word('отбавляю', 6),
  singular2ndPerson: Word('отбавляешь', 6),
  singular3rdPerson: Word('отбавляет', 6),
  plural1stPerson: Word('отбавляем', 6),
  plural2ndPerson: Word('отбавляете', 6),
  plural3rdPerson: Word('отбавляют', 6),
  masculinePast: Word('отбавлял', 6),
  femininePast: Word('отбавляла', 6),
  neuterPast: Word('отбавляло', 6),
  pluralPast: Word('отбавляли', 6),
  imperativeInformal: Word('отбавляй', 6),
  imperativeFormal: Word('отбавляйте', 6),
  imperfect: [],
};

perfectVerbs.set(отбавлять.name.text, отбавлять);

export { отбавлять };