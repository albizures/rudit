import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const умилять: PerfectVerb = {
  name: Word('умилять', 4),
  singular1stPerson: Word('умиляю', 4),
  singular2ndPerson: Word('умиляешь', 4),
  singular3rdPerson: Word('умиляет', 4),
  plural1stPerson: Word('умиляем', 4),
  plural2ndPerson: Word('умиляете', 4),
  plural3rdPerson: Word('умиляют', 4),
  masculinePast: Word('умилял', 4),
  femininePast: Word('умиляла', 4),
  neuterPast: Word('умиляло', 4),
  pluralPast: Word('умиляли', 4),
  imperativeInformal: Word('умиляй', 4),
  imperativeFormal: Word('умиляйте', 4),
  imperfect: [],
};

perfectVerbs.set(умилять.name.text, умилять);

export { умилять };