import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выплавлять: PerfectVerb = {
  name: Word('выплавлять', 7),
  singular1stPerson: Word('выплавляю', 7),
  singular2ndPerson: Word('выплавляешь', 7),
  singular3rdPerson: Word('выплавляет', 7),
  plural1stPerson: Word('выплавляем', 7),
  plural2ndPerson: Word('выплавляете', 7),
  plural3rdPerson: Word('выплавляют', 7),
  masculinePast: Word('выплавлял', 7),
  femininePast: Word('выплавляла', 7),
  neuterPast: Word('выплавляло', 7),
  pluralPast: Word('выплавляли', 7),
  imperativeInformal: Word('выплавляй', 7),
  imperativeFormal: Word('выплавляйте', 7),
  imperfect: [],
};

perfectVerbs.set(выплавлять.name.text, выплавлять);

export { выплавлять };