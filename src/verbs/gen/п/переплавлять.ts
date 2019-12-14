import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переплавлять: PerfectVerb = {
  name: Word('переплавлять', 9),
  singular1stPerson: Word('переплавляю', 9),
  singular2ndPerson: Word('переплавляешь', 9),
  singular3rdPerson: Word('переплавляет', 9),
  plural1stPerson: Word('переплавляем', 9),
  plural2ndPerson: Word('переплавляете', 9),
  plural3rdPerson: Word('переплавляют', 9),
  masculinePast: Word('переплавлял', 9),
  femininePast: Word('переплавляла', 9),
  neuterPast: Word('переплавляло', 9),
  pluralPast: Word('переплавляли', 9),
  imperativeInformal: Word('переплавляй', 9),
  imperativeFormal: Word('переплавляйте', 9),
  imperfect: [],
};

perfectVerbs.set(переплавлять.name.text, переплавлять);

export { переплавлять };