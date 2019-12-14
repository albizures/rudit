import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затенять: PerfectVerb = {
  name: Word('затенять', 5),
  singular1stPerson: Word('затеняю', 5),
  singular2ndPerson: Word('затеняешь', 5),
  singular3rdPerson: Word('затеняет', 5),
  plural1stPerson: Word('затеняем', 5),
  plural2ndPerson: Word('затеняете', 5),
  plural3rdPerson: Word('затеняют', 5),
  masculinePast: Word('затенял', 5),
  femininePast: Word('затеняла', 5),
  neuterPast: Word('затеняло', 5),
  pluralPast: Word('затеняли', 5),
  imperativeInformal: Word('затеняй', 5),
  imperativeFormal: Word('затеняйте', 5),
  imperfect: [],
};

perfectVerbs.set(затенять.name.text, затенять);

export { затенять };