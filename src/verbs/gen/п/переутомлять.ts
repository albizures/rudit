import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переутомлять: PerfectVerb = {
  name: Word('переутомлять', 9),
  singular1stPerson: Word('переутомляю', 9),
  singular2ndPerson: Word('переутомляешь', 9),
  singular3rdPerson: Word('переутомляет', 9),
  plural1stPerson: Word('переутомляем', 9),
  plural2ndPerson: Word('переутомляете', 9),
  plural3rdPerson: Word('переутомляют', 9),
  masculinePast: Word('переутомлял', 9),
  femininePast: Word('переутомляла', 9),
  neuterPast: Word('переутомляло', 9),
  pluralPast: Word('переутомляли', 9),
  imperativeInformal: Word('переутомляй', 9),
  imperativeFormal: Word('переутомляйте', 9),
  imperfect: [],
};

perfectVerbs.set(переутомлять.name.text, переутомлять);

export { переутомлять };