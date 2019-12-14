import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const убавлять: PerfectVerb = {
  name: Word('убавлять', 5),
  singular1stPerson: Word('убавляю', 5),
  singular2ndPerson: Word('убавляешь', 5),
  singular3rdPerson: Word('убавляет', 5),
  plural1stPerson: Word('убавляем', 5),
  plural2ndPerson: Word('убавляете', 5),
  plural3rdPerson: Word('убавляют', 5),
  masculinePast: Word('убавлял', 5),
  femininePast: Word('убавляла', 5),
  neuterPast: Word('убавляло', 5),
  pluralPast: Word('убавляли', 5),
  imperativeInformal: Word('убавляй', 5),
  imperativeFormal: Word('убавляйте', 5),
  imperfect: ['убавить'],
};

perfectVerbs.set(убавлять.name.text, убавлять);

export { убавлять };