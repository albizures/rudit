import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обводнять: PerfectVerb = {
  name: Word('обводнять', 6),
  singular1stPerson: Word('обводняю', 6),
  singular2ndPerson: Word('обводняешь', 6),
  singular3rdPerson: Word('обводняет', 6),
  plural1stPerson: Word('обводняем', 6),
  plural2ndPerson: Word('обводняете', 6),
  plural3rdPerson: Word('обводняют', 6),
  masculinePast: Word('обводнял', 6),
  femininePast: Word('обводняла', 6),
  neuterPast: Word('обводняло', 6),
  pluralPast: Word('обводняли', 6),
  imperativeInformal: Word('обводняй', 6),
  imperativeFormal: Word('обводняйте', 6),
  imperfect: [],
};

perfectVerbs.set(обводнять.name.text, обводнять);

export { обводнять };