import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const умалять: PerfectVerb = {
  name: Word('умалять', 4),
  singular1stPerson: Word('умаляю', 4),
  singular2ndPerson: Word('умаляешь', 4),
  singular3rdPerson: Word('умаляет', 4),
  plural1stPerson: Word('умаляем', 4),
  plural2ndPerson: Word('умаляете', 4),
  plural3rdPerson: Word('умаляют', 4),
  masculinePast: Word('умалял', 4),
  femininePast: Word('умаляла', 4),
  neuterPast: Word('умаляло', 4),
  pluralPast: Word('умаляли', 4),
  imperativeInformal: Word('умаляй', 4),
  imperativeFormal: Word('умаляйте', 4),
  imperfect: [],
};

perfectVerbs.set(умалять.name.text, умалять);

export { умалять };