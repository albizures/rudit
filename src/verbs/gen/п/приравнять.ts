import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приравнять: PerfectVerb = {
  name: Word('приравнять', 7),
  singular1stPerson: Word('приравняю', 7),
  singular2ndPerson: Word('приравняешь', 7),
  singular3rdPerson: Word('приравняет', 7),
  plural1stPerson: Word('приравняем', 7),
  plural2ndPerson: Word('приравняете', 7),
  plural3rdPerson: Word('приравняют', 7),
  masculinePast: Word('приравнял', 7),
  femininePast: Word('приравняла', 7),
  neuterPast: Word('приравняло', 7),
  pluralPast: Word('приравняли', 7),
  imperativeInformal: Word('приравняй', 7),
  imperativeFormal: Word('приравняйте', 7),
  imperfect: [],
};

perfectVerbs.set(приравнять.name.text, приравнять);

export { приравнять };