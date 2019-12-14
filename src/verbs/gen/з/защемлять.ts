import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const защемлять: PerfectVerb = {
  name: Word('защемлять', 6),
  singular1stPerson: Word('защемляю', 6),
  singular2ndPerson: Word('защемляешь', 6),
  singular3rdPerson: Word('защемляет', 6),
  plural1stPerson: Word('защемляем', 6),
  plural2ndPerson: Word('защемляете', 6),
  plural3rdPerson: Word('защемляют', 6),
  masculinePast: Word('защемлял', 6),
  femininePast: Word('защемляла', 6),
  neuterPast: Word('защемляло', 6),
  pluralPast: Word('защемляли', 6),
  imperativeInformal: Word('защемляй', 6),
  imperativeFormal: Word('защемляйте', 6),
  imperfect: [],
};

perfectVerbs.set(защемлять.name.text, защемлять);

export { защемлять };