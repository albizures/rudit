import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вгонять: PerfectVerb = {
  name: Word('вгонять', 4),
  singular1stPerson: Word('вгоняю', 4),
  singular2ndPerson: Word('вгоняешь', 4),
  singular3rdPerson: Word('вгоняет', 4),
  plural1stPerson: Word('вгоняем', 4),
  plural2ndPerson: Word('вгоняете', 4),
  plural3rdPerson: Word('вгоняют', 4),
  masculinePast: Word('вгонял', 4),
  femininePast: Word('вгоняла', 4),
  neuterPast: Word('вгоняло', 4),
  pluralPast: Word('вгоняли', 4),
  imperativeInformal: Word('вгоняй', 4),
  imperativeFormal: Word('вгоняйте', 4),
  imperfect: [],
};

perfectVerbs.set(вгонять.name.text, вгонять);

export { вгонять };