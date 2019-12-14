import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сгонять: PerfectVerb = {
  name: Word('сгонять', 4),
  singular1stPerson: Word('сгоняю', 4),
  singular2ndPerson: Word('сгоняешь', 4),
  singular3rdPerson: Word('сгоняет', 4),
  plural1stPerson: Word('сгоняем', 4),
  plural2ndPerson: Word('сгоняете', 4),
  plural3rdPerson: Word('сгоняют', 4),
  masculinePast: Word('сгонял', 4),
  femininePast: Word('сгоняла', 4),
  neuterPast: Word('сгоняло', 4),
  pluralPast: Word('сгоняли', 4),
  imperativeInformal: Word('сгоняй', 4),
  imperativeFormal: Word('сгоняйте', 4),
  imperfect: [],
};

perfectVerbs.set(сгонять.name.text, сгонять);

export { сгонять };