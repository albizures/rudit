import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const недовыполнять: PerfectVerb = {
  name: Word('недовыполнять', 10),
  singular1stPerson: Word('недовыполняю', 10),
  singular2ndPerson: Word('недовыполняешь', 10),
  singular3rdPerson: Word('недовыполняет', 10),
  plural1stPerson: Word('недовыполняем', 10),
  plural2ndPerson: Word('недовыполняете', 10),
  plural3rdPerson: Word('недовыполняют', 10),
  masculinePast: Word('недовыполнял', 10),
  femininePast: Word('недовыполняла', 10),
  neuterPast: Word('недовыполняло', 10),
  pluralPast: Word('недовыполняли', 10),
  imperativeInformal: Word('недовыполняй', 10),
  imperativeFormal: Word('недовыполняйте', 10),
  imperfect: [],
};

perfectVerbs.set(недовыполнять.name.text, недовыполнять);

export { недовыполнять };