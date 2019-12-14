import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ослеплять: PerfectVerb = {
  name: Word('ослеплять', 6),
  singular1stPerson: Word('ослепляю', 6),
  singular2ndPerson: Word('ослепляешь', 6),
  singular3rdPerson: Word('ослепляет', 6),
  plural1stPerson: Word('ослепляем', 6),
  plural2ndPerson: Word('ослепляете', 6),
  plural3rdPerson: Word('ослепляют', 6),
  masculinePast: Word('ослеплял', 6),
  femininePast: Word('ослепляла', 6),
  neuterPast: Word('ослепляло', 6),
  pluralPast: Word('ослепляли', 6),
  imperativeInformal: Word('ослепляй', 6),
  imperativeFormal: Word('ослепляйте', 6),
  imperfect: [],
};

perfectVerbs.set(ослеплять.name.text, ослеплять);

export { ослеплять };