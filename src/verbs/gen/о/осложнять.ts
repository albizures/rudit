import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осложнять: PerfectVerb = {
  name: Word('осложнять', 6),
  singular1stPerson: Word('осложняю', 6),
  singular2ndPerson: Word('осложняешь', 6),
  singular3rdPerson: Word('осложняет', 6),
  plural1stPerson: Word('осложняем', 6),
  plural2ndPerson: Word('осложняете', 6),
  plural3rdPerson: Word('осложняют', 6),
  masculinePast: Word('осложнял', 6),
  femininePast: Word('осложняла', 6),
  neuterPast: Word('осложняло', 6),
  pluralPast: Word('осложняли', 6),
  imperativeInformal: Word('осложняй', 6),
  imperativeFormal: Word('осложняйте', 6),
  imperfect: [],
};

perfectVerbs.set(осложнять.name.text, осложнять);

export { осложнять };