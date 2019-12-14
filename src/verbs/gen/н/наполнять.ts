import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наполнять: PerfectVerb = {
  name: Word('наполнять', 6),
  singular1stPerson: Word('наполняю', 6),
  singular2ndPerson: Word('наполняешь', 6),
  singular3rdPerson: Word('наполняет', 6),
  plural1stPerson: Word('наполняем', 6),
  plural2ndPerson: Word('наполняете', 6),
  plural3rdPerson: Word('наполняют', 6),
  masculinePast: Word('наполнял', 6),
  femininePast: Word('наполняла', 6),
  neuterPast: Word('наполняло', 6),
  pluralPast: Word('наполняли', 6),
  imperativeInformal: Word('наполняй', 6),
  imperativeFormal: Word('наполняйте', 6),
  imperfect: [],
};

perfectVerbs.set(наполнять.name.text, наполнять);

export { наполнять };