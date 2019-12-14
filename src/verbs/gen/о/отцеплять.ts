import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отцеплять: PerfectVerb = {
  name: Word('отцеплять', 6),
  singular1stPerson: Word('отцепляю', 6),
  singular2ndPerson: Word('отцепляешь', 6),
  singular3rdPerson: Word('отцепляет', 6),
  plural1stPerson: Word('отцепляем', 6),
  plural2ndPerson: Word('отцепляете', 6),
  plural3rdPerson: Word('отцепляют', 6),
  masculinePast: Word('отцеплял', 6),
  femininePast: Word('отцепляла', 6),
  neuterPast: Word('отцепляло', 6),
  pluralPast: Word('отцепляли', 6),
  imperativeInformal: Word('отцепляй', 6),
  imperativeFormal: Word('отцепляйте', 6),
  imperfect: [],
};

perfectVerbs.set(отцеплять.name.text, отцеплять);

export { отцеплять };