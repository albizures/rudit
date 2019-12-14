import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вытиснять: PerfectVerb = {
  name: Word('вытиснять', 6),
  singular1stPerson: Word('вытисняю', 6),
  singular2ndPerson: Word('вытисняешь', 6),
  singular3rdPerson: Word('вытисняет', 6),
  plural1stPerson: Word('вытисняем', 6),
  plural2ndPerson: Word('вытисняете', 6),
  plural3rdPerson: Word('вытисняют', 6),
  masculinePast: Word('вытиснял', 6),
  femininePast: Word('вытисняла', 6),
  neuterPast: Word('вытисняло', 6),
  pluralPast: Word('вытисняли', 6),
  imperativeInformal: Word('вытисняй', 6),
  imperativeFormal: Word('вытисняйте', 6),
  imperfect: [],
};

perfectVerbs.set(вытиснять.name.text, вытиснять);

export { вытиснять };