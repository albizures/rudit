import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стрелять: PerfectVerb = {
  name: Word('стрелять', 5),
  singular1stPerson: Word('стреляю', 5),
  singular2ndPerson: Word('стреляешь', 5),
  singular3rdPerson: Word('стреляет', 5),
  plural1stPerson: Word('стреляем', 5),
  plural2ndPerson: Word('стреляете', 5),
  plural3rdPerson: Word('стреляют', 5),
  masculinePast: Word('стрелял', 5),
  femininePast: Word('стреляла', 5),
  neuterPast: Word('стреляло', 5),
  pluralPast: Word('стреляли', 5),
  imperativeInformal: Word('стреляй', 5),
  imperativeFormal: Word('стреляйте', 5),
  imperfect: ['выстрелить','стрельнуть'],
};

perfectVerbs.set(стрелять.name.text, стрелять);

export { стрелять };