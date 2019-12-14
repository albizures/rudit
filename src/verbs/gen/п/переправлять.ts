import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переправлять: PerfectVerb = {
  name: Word('переправлять', 9),
  singular1stPerson: Word('переправляю', 9),
  singular2ndPerson: Word('переправляешь', 9),
  singular3rdPerson: Word('переправляет', 9),
  plural1stPerson: Word('переправляем', 9),
  plural2ndPerson: Word('переправляете', 9),
  plural3rdPerson: Word('переправляют', 9),
  masculinePast: Word('переправлял', 9),
  femininePast: Word('переправляла', 9),
  neuterPast: Word('переправляло', 9),
  pluralPast: Word('переправляли', 9),
  imperativeInformal: Word('переправляй', 9),
  imperativeFormal: Word('переправляйте', 9),
  imperfect: [],
};

perfectVerbs.set(переправлять.name.text, переправлять);

export { переправлять };