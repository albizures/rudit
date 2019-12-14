import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const восполнять: PerfectVerb = {
  name: Word('восполнять', 7),
  singular1stPerson: Word('восполняю', 7),
  singular2ndPerson: Word('восполняешь', 7),
  singular3rdPerson: Word('восполняет', 7),
  plural1stPerson: Word('восполняем', 7),
  plural2ndPerson: Word('восполняете', 7),
  plural3rdPerson: Word('восполняют', 7),
  masculinePast: Word('восполнял', 7),
  femininePast: Word('восполняла', 7),
  neuterPast: Word('восполняло', 7),
  pluralPast: Word('восполняли', 7),
  imperativeInformal: Word('восполняй', 7),
  imperativeFormal: Word('восполняйте', 7),
  imperfect: [],
};

perfectVerbs.set(восполнять.name.text, восполнять);

export { восполнять };