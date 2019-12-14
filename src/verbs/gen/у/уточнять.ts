import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уточнять: PerfectVerb = {
  name: Word('уточнять', 5),
  singular1stPerson: Word('уточняю', 5),
  singular2ndPerson: Word('уточняешь', 5),
  singular3rdPerson: Word('уточняет', 5),
  plural1stPerson: Word('уточняем', 5),
  plural2ndPerson: Word('уточняете', 5),
  plural3rdPerson: Word('уточняют', 5),
  masculinePast: Word('уточнял', 5),
  femininePast: Word('уточняла', 5),
  neuterPast: Word('уточняло', 5),
  pluralPast: Word('уточняли', 5),
  imperativeInformal: Word('уточняй', 5),
  imperativeFormal: Word('уточняйте', 5),
  imperfect: [],
};

perfectVerbs.set(уточнять.name.text, уточнять);

export { уточнять };