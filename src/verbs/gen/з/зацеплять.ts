import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зацеплять: PerfectVerb = {
  name: Word('зацеплять', 6),
  singular1stPerson: Word('зацепляю', 6),
  singular2ndPerson: Word('зацепляешь', 6),
  singular3rdPerson: Word('зацепляет', 6),
  plural1stPerson: Word('зацепляем', 6),
  plural2ndPerson: Word('зацепляете', 6),
  plural3rdPerson: Word('зацепляют', 6),
  masculinePast: Word('зацеплял', 6),
  femininePast: Word('зацепляла', 6),
  neuterPast: Word('зацепляло', 6),
  pluralPast: Word('зацепляли', 6),
  imperativeInformal: Word('зацепляй', 6),
  imperativeFormal: Word('зацепляйте', 6),
  imperfect: [],
};

perfectVerbs.set(зацеплять.name.text, зацеплять);

export { зацеплять };