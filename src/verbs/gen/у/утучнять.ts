import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утучнять: PerfectVerb = {
  name: Word('утучнять', 5),
  singular1stPerson: Word('утучняю', 5),
  singular2ndPerson: Word('утучняешь', 5),
  singular3rdPerson: Word('утучняет', 5),
  plural1stPerson: Word('утучняем', 5),
  plural2ndPerson: Word('утучняете', 5),
  plural3rdPerson: Word('утучняют', 5),
  masculinePast: Word('утучнял', 5),
  femininePast: Word('утучняла', 5),
  neuterPast: Word('утучняло', 5),
  pluralPast: Word('утучняли', 5),
  imperativeInformal: Word('утучняй', 5),
  imperativeFormal: Word('утучняйте', 5),
  imperfect: [],
};

perfectVerbs.set(утучнять.name.text, утучнять);

export { утучнять };