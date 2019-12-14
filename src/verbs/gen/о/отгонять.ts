import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отгонять: PerfectVerb = {
  name: Word('отгонять', 5),
  singular1stPerson: Word('отгоняю', 5),
  singular2ndPerson: Word('отгоняешь', 5),
  singular3rdPerson: Word('отгоняет', 5),
  plural1stPerson: Word('отгоняем', 5),
  plural2ndPerson: Word('отгоняете', 5),
  plural3rdPerson: Word('отгоняют', 5),
  masculinePast: Word('отгонял', 5),
  femininePast: Word('отгоняла', 5),
  neuterPast: Word('отгоняло', 5),
  pluralPast: Word('отгоняли', 5),
  imperativeInformal: Word('отгоняй', 5),
  imperativeFormal: Word('отгоняйте', 5),
  imperfect: [],
};

perfectVerbs.set(отгонять.name.text, отгонять);

export { отгонять };