import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уравнять: PerfectVerb = {
  name: Word('уравнять', 5),
  singular1stPerson: Word('уравняю', 5),
  singular2ndPerson: Word('уравняешь', 5),
  singular3rdPerson: Word('уравняет', 5),
  plural1stPerson: Word('уравняем', 5),
  plural2ndPerson: Word('уравняете', 5),
  plural3rdPerson: Word('уравняют', 5),
  masculinePast: Word('уравнял', 5),
  femininePast: Word('уравняла', 5),
  neuterPast: Word('уравняло', 5),
  pluralPast: Word('уравняли', 5),
  imperativeInformal: Word('уравняй', 5),
  imperativeFormal: Word('уравняйте', 5),
  imperfect: [],
};

perfectVerbs.set(уравнять.name.text, уравнять);

export { уравнять };