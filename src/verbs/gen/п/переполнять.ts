import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переполнять: PerfectVerb = {
  name: Word('переполнять', 8),
  singular1stPerson: Word('переполняю', 8),
  singular2ndPerson: Word('переполняешь', 8),
  singular3rdPerson: Word('переполняет', 8),
  plural1stPerson: Word('переполняем', 8),
  plural2ndPerson: Word('переполняете', 8),
  plural3rdPerson: Word('переполняют', 8),
  masculinePast: Word('переполнял', 8),
  femininePast: Word('переполняла', 8),
  neuterPast: Word('переполняло', 8),
  pluralPast: Word('переполняли', 8),
  imperativeInformal: Word('переполняй', 8),
  imperativeFormal: Word('переполняйте', 8),
  imperfect: [],
};

perfectVerbs.set(переполнять.name.text, переполнять);

export { переполнять };