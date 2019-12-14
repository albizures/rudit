import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нацеплять: PerfectVerb = {
  name: Word('нацеплять', 6),
  singular1stPerson: Word('нацепляю', 6),
  singular2ndPerson: Word('нацепляешь', 6),
  singular3rdPerson: Word('нацепляет', 6),
  plural1stPerson: Word('нацепляем', 6),
  plural2ndPerson: Word('нацепляете', 6),
  plural3rdPerson: Word('нацепляют', 6),
  masculinePast: Word('нацеплял', 6),
  femininePast: Word('нацепляла', 6),
  neuterPast: Word('нацепляло', 6),
  pluralPast: Word('нацепляли', 6),
  imperativeInformal: Word('нацепляй', 6),
  imperativeFormal: Word('нацепляйте', 6),
  imperfect: [],
};

perfectVerbs.set(нацеплять.name.text, нацеплять);

export { нацеплять };