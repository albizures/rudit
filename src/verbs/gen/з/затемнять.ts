import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затемнять: PerfectVerb = {
  name: Word('затемнять', 6),
  singular1stPerson: Word('затемняю', 6),
  singular2ndPerson: Word('затемняешь', 6),
  singular3rdPerson: Word('затемняет', 6),
  plural1stPerson: Word('затемняем', 6),
  plural2ndPerson: Word('затемняете', 6),
  plural3rdPerson: Word('затемняют', 6),
  masculinePast: Word('затемнял', 6),
  femininePast: Word('затемняла', 6),
  neuterPast: Word('затемняло', 6),
  pluralPast: Word('затемняли', 6),
  imperativeInformal: Word('затемняй', 6),
  imperativeFormal: Word('затемняйте', 6),
  imperfect: [],
};

perfectVerbs.set(затемнять.name.text, затемнять);

export { затемнять };