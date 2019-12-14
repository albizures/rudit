import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const охранять: PerfectVerb = {
  name: Word('охранять', 5),
  singular1stPerson: Word('охраняю', 5),
  singular2ndPerson: Word('охраняешь', 5),
  singular3rdPerson: Word('охраняет', 5),
  plural1stPerson: Word('охраняем', 5),
  plural2ndPerson: Word('охраняете', 5),
  plural3rdPerson: Word('охраняют', 5),
  masculinePast: Word('охранял', 5),
  femininePast: Word('охраняла', 5),
  neuterPast: Word('охраняло', 5),
  pluralPast: Word('охраняли', 5),
  imperativeInformal: Word('охраняй', 5),
  imperativeFormal: Word('охраняйте', 5),
  imperfect: [],
};

perfectVerbs.set(охранять.name.text, охранять);

export { охранять };