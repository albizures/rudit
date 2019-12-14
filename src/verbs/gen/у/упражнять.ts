import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const упражнять: PerfectVerb = {
  name: Word('упражнять', 6),
  singular1stPerson: Word('упражняю', 6),
  singular2ndPerson: Word('упражняешь', 6),
  singular3rdPerson: Word('упражняет', 6),
  plural1stPerson: Word('упражняем', 6),
  plural2ndPerson: Word('упражняете', 6),
  plural3rdPerson: Word('упражняют', 6),
  masculinePast: Word('упражнял', 6),
  femininePast: Word('упражняла', 6),
  neuterPast: Word('упражняло', 6),
  pluralPast: Word('упражняли', 6),
  imperativeInformal: Word('упражняй', 6),
  imperativeFormal: Word('упражняйте', 6),
  imperfect: [],
};

perfectVerbs.set(упражнять.name.text, упражнять);

export { упражнять };