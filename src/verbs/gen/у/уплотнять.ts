import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уплотнять: PerfectVerb = {
  name: Word('уплотнять', 6),
  singular1stPerson: Word('уплотняю', 6),
  singular2ndPerson: Word('уплотняешь', 6),
  singular3rdPerson: Word('уплотняет', 6),
  plural1stPerson: Word('уплотняем', 6),
  plural2ndPerson: Word('уплотняете', 6),
  plural3rdPerson: Word('уплотняют', 6),
  masculinePast: Word('уплотнял', 6),
  femininePast: Word('уплотняла', 6),
  neuterPast: Word('уплотняло', 6),
  pluralPast: Word('уплотняли', 6),
  imperativeInformal: Word('уплотняй', 6),
  imperativeFormal: Word('уплотняйте', 6),
  imperfect: [],
};

perfectVerbs.set(уплотнять.name.text, уплотнять);

export { уплотнять };