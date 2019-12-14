import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const равнять: PerfectVerb = {
  name: Word('равнять', 4),
  singular1stPerson: Word('равняю', 4),
  singular2ndPerson: Word('равняешь', 4),
  singular3rdPerson: Word('равняет', 4),
  plural1stPerson: Word('равняем', 4),
  plural2ndPerson: Word('равняете', 4),
  plural3rdPerson: Word('равняют', 4),
  masculinePast: Word('равнял', 4),
  femininePast: Word('равняла', 4),
  neuterPast: Word('равняло', 4),
  pluralPast: Word('равняли', 4),
  imperativeInformal: Word('равняй', 4),
  imperativeFormal: Word('равняйте', 4),
  imperfect: [],
};

perfectVerbs.set(равнять.name.text, равнять);

export { равнять };