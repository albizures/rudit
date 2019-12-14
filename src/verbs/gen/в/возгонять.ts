import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возгонять: PerfectVerb = {
  name: Word('возгонять', 6),
  singular1stPerson: Word('возгоняю', 6),
  singular2ndPerson: Word('возгоняешь', 6),
  singular3rdPerson: Word('возгоняет', 6),
  plural1stPerson: Word('возгоняем', 6),
  plural2ndPerson: Word('возгоняете', 6),
  plural3rdPerson: Word('возгоняют', 6),
  masculinePast: Word('возгонял', 6),
  femininePast: Word('возгоняла', 6),
  neuterPast: Word('возгоняло', 6),
  pluralPast: Word('возгоняли', 6),
  imperativeInformal: Word('возгоняй', 6),
  imperativeFormal: Word('возгоняйте', 6),
  imperfect: [],
};

perfectVerbs.set(возгонять.name.text, возгонять);

export { возгонять };