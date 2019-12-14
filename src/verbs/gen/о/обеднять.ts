import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обеднять: PerfectVerb = {
  name: Word('обеднять', 5),
  singular1stPerson: Word('обедняю', 5),
  singular2ndPerson: Word('обедняешь', 5),
  singular3rdPerson: Word('обедняет', 5),
  plural1stPerson: Word('обедняем', 5),
  plural2ndPerson: Word('обедняете', 5),
  plural3rdPerson: Word('обедняют', 5),
  masculinePast: Word('обеднял', 5),
  femininePast: Word('обедняла', 5),
  neuterPast: Word('обедняло', 5),
  pluralPast: Word('обедняли', 5),
  imperativeInformal: Word('обедняй', 5),
  imperativeFormal: Word('обедняйте', 5),
  imperfect: [],
};

perfectVerbs.set(обеднять.name.text, обеднять);

export { обеднять };