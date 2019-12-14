import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const облеплять: PerfectVerb = {
  name: Word('облеплять', 6),
  singular1stPerson: Word('облепляю', 6),
  singular2ndPerson: Word('облепляешь', 6),
  singular3rdPerson: Word('облепляет', 6),
  plural1stPerson: Word('облепляем', 6),
  plural2ndPerson: Word('облепляете', 6),
  plural3rdPerson: Word('облепляют', 6),
  masculinePast: Word('облеплял', 6),
  femininePast: Word('облепляла', 6),
  neuterPast: Word('облепляло', 6),
  pluralPast: Word('облепляли', 6),
  imperativeInformal: Word('облепляй', 6),
  imperativeFormal: Word('облепляйте', 6),
  imperfect: [],
};

perfectVerbs.set(облеплять.name.text, облеплять);

export { облеплять };