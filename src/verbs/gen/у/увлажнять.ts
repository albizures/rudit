import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const увлажнять: PerfectVerb = {
  name: Word('увлажнять', 6),
  singular1stPerson: Word('увлажняю', 6),
  singular2ndPerson: Word('увлажняешь', 6),
  singular3rdPerson: Word('увлажняет', 6),
  plural1stPerson: Word('увлажняем', 6),
  plural2ndPerson: Word('увлажняете', 6),
  plural3rdPerson: Word('увлажняют', 6),
  masculinePast: Word('увлажнял', 6),
  femininePast: Word('увлажняла', 6),
  neuterPast: Word('увлажняло', 6),
  pluralPast: Word('увлажняли', 6),
  imperativeInformal: Word('увлажняй', 6),
  imperativeFormal: Word('увлажняйте', 6),
  imperfect: [],
};

perfectVerbs.set(увлажнять.name.text, увлажнять);

export { увлажнять };