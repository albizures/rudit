import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const остепенять: PerfectVerb = {
  name: Word('остепенять', 7),
  singular1stPerson: Word('остепеняю', 7),
  singular2ndPerson: Word('остепеняешь', 7),
  singular3rdPerson: Word('остепеняет', 7),
  plural1stPerson: Word('остепеняем', 7),
  plural2ndPerson: Word('остепеняете', 7),
  plural3rdPerson: Word('остепеняют', 7),
  masculinePast: Word('остепенял', 7),
  femininePast: Word('остепеняла', 7),
  neuterPast: Word('остепеняло', 7),
  pluralPast: Word('остепеняли', 7),
  imperativeInformal: Word('остепеняй', 7),
  imperativeFormal: Word('остепеняйте', 7),
  imperfect: [],
};

perfectVerbs.set(остепенять.name.text, остепенять);

export { остепенять };