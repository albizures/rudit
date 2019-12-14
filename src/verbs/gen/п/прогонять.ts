import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прогонять: PerfectVerb = {
  name: Word('прогонять', 6),
  singular1stPerson: Word('прогоняю', 6),
  singular2ndPerson: Word('прогоняешь', 6),
  singular3rdPerson: Word('прогоняет', 6),
  plural1stPerson: Word('прогоняем', 6),
  plural2ndPerson: Word('прогоняете', 6),
  plural3rdPerson: Word('прогоняют', 6),
  masculinePast: Word('прогонял', 6),
  femininePast: Word('прогоняла', 6),
  neuterPast: Word('прогоняло', 6),
  pluralPast: Word('прогоняли', 6),
  imperativeInformal: Word('прогоняй', 6),
  imperativeFormal: Word('прогоняйте', 6),
  imperfect: [],
};

perfectVerbs.set(прогонять.name.text, прогонять);

export { прогонять };