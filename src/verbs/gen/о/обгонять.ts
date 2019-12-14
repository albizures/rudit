import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обгонять: PerfectVerb = {
  name: Word('обгонять', 5),
  singular1stPerson: Word('обгоняю', 5),
  singular2ndPerson: Word('обгоняешь', 5),
  singular3rdPerson: Word('обгоняет', 5),
  plural1stPerson: Word('обгоняем', 5),
  plural2ndPerson: Word('обгоняете', 5),
  plural3rdPerson: Word('обгоняют', 5),
  masculinePast: Word('обгонял', 5),
  femininePast: Word('обгоняла', 5),
  neuterPast: Word('обгоняло', 5),
  pluralPast: Word('обгоняли', 5),
  imperativeInformal: Word('обгоняй', 5),
  imperativeFormal: Word('обгоняйте', 5),
  imperfect: [],
};

perfectVerbs.set(обгонять.name.text, обгонять);

export { обгонять };