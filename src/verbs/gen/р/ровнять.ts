import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ровнять: PerfectVerb = {
  name: Word('ровнять', 4),
  singular1stPerson: Word('ровняю', 4),
  singular2ndPerson: Word('ровняешь', 4),
  singular3rdPerson: Word('ровняет', 4),
  plural1stPerson: Word('ровняем', 4),
  plural2ndPerson: Word('ровняете', 4),
  plural3rdPerson: Word('ровняют', 4),
  masculinePast: Word('ровнял', 4),
  femininePast: Word('ровняла', 4),
  neuterPast: Word('ровняло', 4),
  pluralPast: Word('ровняли', 4),
  imperativeInformal: Word('ровняй', 4),
  imperativeFormal: Word('ровняйте', 4),
  imperfect: [],
};

perfectVerbs.set(ровнять.name.text, ровнять);

export { ровнять };