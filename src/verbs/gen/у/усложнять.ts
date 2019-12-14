import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const усложнять: PerfectVerb = {
  name: Word('усложнять', 6),
  singular1stPerson: Word('усложняю', 6),
  singular2ndPerson: Word('усложняешь', 6),
  singular3rdPerson: Word('усложняет', 6),
  plural1stPerson: Word('усложняем', 6),
  plural2ndPerson: Word('усложняете', 6),
  plural3rdPerson: Word('усложняют', 6),
  masculinePast: Word('усложнял', 6),
  femininePast: Word('усложняла', 6),
  neuterPast: Word('усложняло', 6),
  pluralPast: Word('усложняли', 6),
  imperativeInformal: Word('усложняй', 6),
  imperativeFormal: Word('усложняйте', 6),
  imperfect: ['усложнить'],
};

perfectVerbs.set(усложнять.name.text, усложнять);

export { усложнять };