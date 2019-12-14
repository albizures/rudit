import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поправлять: PerfectVerb = {
  name: Word('поправлять', 7),
  singular1stPerson: Word('поправляю', 7),
  singular2ndPerson: Word('поправляешь', 7),
  singular3rdPerson: Word('поправляет', 7),
  plural1stPerson: Word('поправляем', 7),
  plural2ndPerson: Word('поправляете', 7),
  plural3rdPerson: Word('поправляют', 7),
  masculinePast: Word('поправлял', 7),
  femininePast: Word('поправляла', 7),
  neuterPast: Word('поправляло', 7),
  pluralPast: Word('поправляли', 7),
  imperativeInformal: Word('поправляй', 7),
  imperativeFormal: Word('поправляйте', 7),
  imperfect: [],
};

perfectVerbs.set(поправлять.name.text, поправлять);

export { поправлять };