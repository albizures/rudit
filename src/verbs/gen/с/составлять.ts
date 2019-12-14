import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const составлять: PerfectVerb = {
  name: Word('составлять', 7),
  singular1stPerson: Word('составляю', 7),
  singular2ndPerson: Word('составляешь', 7),
  singular3rdPerson: Word('составляет', 7),
  plural1stPerson: Word('составляем', 7),
  plural2ndPerson: Word('составляете', 7),
  plural3rdPerson: Word('составляют', 7),
  masculinePast: Word('составлял', 7),
  femininePast: Word('составляла', 7),
  neuterPast: Word('составляло', 7),
  pluralPast: Word('составляли', 7),
  imperativeInformal: Word('составляй', 7),
  imperativeFormal: Word('составляйте', 7),
  imperfect: ['составить'],
};

perfectVerbs.set(составлять.name.text, составлять);

export { составлять };