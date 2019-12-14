import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наводнять: PerfectVerb = {
  name: Word('наводнять', 6),
  singular1stPerson: Word('наводняю', 6),
  singular2ndPerson: Word('наводняешь', 6),
  singular3rdPerson: Word('наводняет', 6),
  plural1stPerson: Word('наводняем', 6),
  plural2ndPerson: Word('наводняете', 6),
  plural3rdPerson: Word('наводняют', 6),
  masculinePast: Word('наводнял', 6),
  femininePast: Word('наводняла', 6),
  neuterPast: Word('наводняло', 6),
  pluralPast: Word('наводняли', 6),
  imperativeInformal: Word('наводняй', 6),
  imperativeFormal: Word('наводняйте', 6),
  imperfect: [],
};

perfectVerbs.set(наводнять.name.text, наводнять);

export { наводнять };