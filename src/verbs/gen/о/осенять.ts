import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осенять: PerfectVerb = {
  name: Word('осенять', 4),
  singular1stPerson: Word('осеняю', 4),
  singular2ndPerson: Word('осеняешь', 4),
  singular3rdPerson: Word('осеняет', 4),
  plural1stPerson: Word('осеняем', 4),
  plural2ndPerson: Word('осеняете', 4),
  plural3rdPerson: Word('осеняют', 4),
  masculinePast: Word('осенял', 4),
  femininePast: Word('осеняла', 4),
  neuterPast: Word('осеняло', 4),
  pluralPast: Word('осеняли', 4),
  imperativeInformal: Word('осеняй', 4),
  imperativeFormal: Word('осеняйте', 4),
  imperfect: [],
};

perfectVerbs.set(осенять.name.text, осенять);

export { осенять };