import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const петлять: PerfectVerb = {
  name: Word('петлять', 4),
  singular1stPerson: Word('петляю', 4),
  singular2ndPerson: Word('петляешь', 4),
  singular3rdPerson: Word('петляет', 4),
  plural1stPerson: Word('петляем', 4),
  plural2ndPerson: Word('петляете', 4),
  plural3rdPerson: Word('петляют', 4),
  masculinePast: Word('петлял', 4),
  femininePast: Word('петляла', 4),
  neuterPast: Word('петляло', 4),
  pluralPast: Word('петляли', 4),
  imperativeInformal: Word('петляй', 4),
  imperativeFormal: Word('петляйте', 4),
  imperfect: [],
};

perfectVerbs.set(петлять.name.text, петлять);

export { петлять };