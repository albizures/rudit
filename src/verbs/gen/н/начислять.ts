import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const начислять: PerfectVerb = {
  name: Word('начислять', 6),
  singular1stPerson: Word('начисляю', 6),
  singular2ndPerson: Word('начисляешь', 6),
  singular3rdPerson: Word('начисляет', 6),
  plural1stPerson: Word('начисляем', 6),
  plural2ndPerson: Word('начисляете', 6),
  plural3rdPerson: Word('начисляют', 6),
  masculinePast: Word('начислял', 6),
  femininePast: Word('начисляла', 6),
  neuterPast: Word('начисляло', 6),
  pluralPast: Word('начисляли', 6),
  imperativeInformal: Word('начисляй', 6),
  imperativeFormal: Word('начисляйте', 6),
  imperfect: [],
};

perfectVerbs.set(начислять.name.text, начислять);

export { начислять };