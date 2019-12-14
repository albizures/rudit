import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сравнять: PerfectVerb = {
  name: Word('сравнять', 5),
  singular1stPerson: Word('сравняю', 5),
  singular2ndPerson: Word('сравняешь', 5),
  singular3rdPerson: Word('сравняет', 5),
  plural1stPerson: Word('сравняем', 5),
  plural2ndPerson: Word('сравняете', 5),
  plural3rdPerson: Word('сравняют', 5),
  masculinePast: Word('сравнял', 5),
  femininePast: Word('сравняла', 5),
  neuterPast: Word('сравняло', 5),
  pluralPast: Word('сравняли', 5),
  imperativeInformal: Word('сравняй', 5),
  imperativeFormal: Word('сравняйте', 5),
  imperfect: [],
};

perfectVerbs.set(сравнять.name.text, сравнять);

export { сравнять };