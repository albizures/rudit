import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возбранять: PerfectVerb = {
  name: Word('возбранять', 7),
  singular1stPerson: Word('возбраняю', 7),
  singular2ndPerson: Word('возбраняешь', 7),
  singular3rdPerson: Word('возбраняет', 7),
  plural1stPerson: Word('возбраняем', 7),
  plural2ndPerson: Word('возбраняете', 7),
  plural3rdPerson: Word('возбраняют', 7),
  masculinePast: Word('возбранял', 7),
  femininePast: Word('возбраняла', 7),
  neuterPast: Word('возбраняло', 7),
  pluralPast: Word('возбраняли', 7),
  imperativeInformal: Word('возбраняй', 7),
  imperativeFormal: Word('возбраняйте', 7),
  imperfect: [],
};

perfectVerbs.set(возбранять.name.text, возбранять);

export { возбранять };