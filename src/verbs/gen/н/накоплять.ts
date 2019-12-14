import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накоплять: PerfectVerb = {
  name: Word('накоплять', 6),
  singular1stPerson: Word('накопляю', 6),
  singular2ndPerson: Word('накопляешь', 6),
  singular3rdPerson: Word('накопляет', 6),
  plural1stPerson: Word('накопляем', 6),
  plural2ndPerson: Word('накопляете', 6),
  plural3rdPerson: Word('накопляют', 6),
  masculinePast: Word('накоплял', 6),
  femininePast: Word('накопляла', 6),
  neuterPast: Word('накопляло', 6),
  pluralPast: Word('накопляли', 6),
  imperativeInformal: Word('накопляй', 6),
  imperativeFormal: Word('накопляйте', 6),
  imperfect: [],
};

perfectVerbs.set(накоплять.name.text, накоплять);

export { накоплять };