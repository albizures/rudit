import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загулять: PerfectVerb = {
  name: Word('загулять', 5),
  singular1stPerson: Word('загуляю', 5),
  singular2ndPerson: Word('загуляешь', 5),
  singular3rdPerson: Word('загуляет', 5),
  plural1stPerson: Word('загуляем', 5),
  plural2ndPerson: Word('загуляете', 5),
  plural3rdPerson: Word('загуляют', 5),
  masculinePast: Word('загулял', 5),
  femininePast: Word('загуляла', 5),
  neuterPast: Word('загуляло', 5),
  pluralPast: Word('загуляли', 5),
  imperativeInformal: Word('загуляй', 5),
  imperativeFormal: Word('загуляйте', 5),
  imperfect: [],
};

perfectVerbs.set(загулять.name.text, загулять);

export { загулять };