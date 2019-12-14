import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const навонять: PerfectVerb = {
  name: Word('навонять', 5),
  singular1stPerson: Word('навоняю', 5),
  singular2ndPerson: Word('навоняешь', 5),
  singular3rdPerson: Word('навоняет', 5),
  plural1stPerson: Word('навоняем', 5),
  plural2ndPerson: Word('навоняете', 5),
  plural3rdPerson: Word('навоняют', 5),
  masculinePast: Word('навонял', 5),
  femininePast: Word('навоняла', 5),
  neuterPast: Word('навоняло', 5),
  pluralPast: Word('навоняли', 5),
  imperativeInformal: Word('навоняй', 5),
  imperativeFormal: Word('навоняйте', 5),
  imperfect: [],
};

perfectVerbs.set(навонять.name.text, навонять);

export { навонять };