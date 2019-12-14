import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выполнять: PerfectVerb = {
  name: Word('выполнять', 6),
  singular1stPerson: Word('выполняю', 6),
  singular2ndPerson: Word('выполняешь', 6),
  singular3rdPerson: Word('выполняет', 6),
  plural1stPerson: Word('выполняем', 6),
  plural2ndPerson: Word('выполняете', 6),
  plural3rdPerson: Word('выполняют', 6),
  masculinePast: Word('выполнял', 6),
  femininePast: Word('выполняла', 6),
  neuterPast: Word('выполняло', 6),
  pluralPast: Word('выполняли', 6),
  imperativeInformal: Word('выполняй', 6),
  imperativeFormal: Word('выполняйте', 6),
  imperfect: ['выполнить'],
};

perfectVerbs.set(выполнять.name.text, выполнять);

export { выполнять };