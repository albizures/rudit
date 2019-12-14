import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const слонять: PerfectVerb = {
  name: Word('слонять', 4),
  singular1stPerson: Word('слоняю', 4),
  singular2ndPerson: Word('слоняешь', 4),
  singular3rdPerson: Word('слоняет', 4),
  plural1stPerson: Word('слоняем', 4),
  plural2ndPerson: Word('слоняете', 4),
  plural3rdPerson: Word('слоняют', 4),
  masculinePast: Word('слонял', 4),
  femininePast: Word('слоняла', 4),
  neuterPast: Word('слоняло', 4),
  pluralPast: Word('слоняли', 4),
  imperativeInformal: Word('слоняй', 4),
  imperativeFormal: Word('слоняйте', 4),
  imperfect: [],
};

perfectVerbs.set(слонять.name.text, слонять);

export { слонять };