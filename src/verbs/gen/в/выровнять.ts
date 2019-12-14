import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выровнять: PerfectVerb = {
  name: Word('выровнять', 1),
  singular1stPerson: Word('выровняю', 1),
  singular2ndPerson: Word('выровняешь', 1),
  singular3rdPerson: Word('выровняет', 1),
  plural1stPerson: Word('выровняем', 1),
  plural2ndPerson: Word('выровняете', 1),
  plural3rdPerson: Word('выровняют', 1),
  masculinePast: Word('выровнял', 1),
  femininePast: Word('выровняла', 1),
  neuterPast: Word('выровняло', 1),
  pluralPast: Word('выровняли', 1),
  imperativeInformal: Word('выровняй', 1),
  imperativeFormal: Word('выровняйте', 1),
  imperfect: ['выравнивать'],
};

perfectVerbs.set(выровнять.name.text, выровнять);

export { выровнять };