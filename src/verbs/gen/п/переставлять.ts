import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переставлять: PerfectVerb = {
  name: Word('переставлять', 9),
  singular1stPerson: Word('переставляю', 9),
  singular2ndPerson: Word('переставляешь', 9),
  singular3rdPerson: Word('переставляет', 9),
  plural1stPerson: Word('переставляем', 9),
  plural2ndPerson: Word('переставляете', 9),
  plural3rdPerson: Word('переставляют', 9),
  masculinePast: Word('переставлял', 9),
  femininePast: Word('переставляла', 9),
  neuterPast: Word('переставляло', 9),
  pluralPast: Word('переставляли', 9),
  imperativeInformal: Word('переставляй', 9),
  imperativeFormal: Word('переставляйте', 9),
  imperfect: ['переставить'],
};

perfectVerbs.set(переставлять.name.text, переставлять);

export { переставлять };