import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ославлять: PerfectVerb = {
  name: Word('ославлять', 6),
  singular1stPerson: Word('ославляю', 6),
  singular2ndPerson: Word('ославляешь', 6),
  singular3rdPerson: Word('ославляет', 6),
  plural1stPerson: Word('ославляем', 6),
  plural2ndPerson: Word('ославляете', 6),
  plural3rdPerson: Word('ославляют', 6),
  masculinePast: Word('ославлял', 6),
  femininePast: Word('ославляла', 6),
  neuterPast: Word('ославляло', 6),
  pluralPast: Word('ославляли', 6),
  imperativeInformal: Word('ославляй', 6),
  imperativeFormal: Word('ославляйте', 6),
  imperfect: [],
};

perfectVerbs.set(ославлять.name.text, ославлять);

export { ославлять };