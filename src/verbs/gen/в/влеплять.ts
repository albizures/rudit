import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const влеплять: PerfectVerb = {
  name: Word('влеплять', 5),
  singular1stPerson: Word('влепляю', 5),
  singular2ndPerson: Word('влепляешь', 5),
  singular3rdPerson: Word('влепляет', 5),
  plural1stPerson: Word('влепляем', 5),
  plural2ndPerson: Word('влепляете', 5),
  plural3rdPerson: Word('влепляют', 5),
  masculinePast: Word('влеплял', 5),
  femininePast: Word('влепляла', 5),
  neuterPast: Word('влепляло', 5),
  pluralPast: Word('влепляли', 5),
  imperativeInformal: Word('влепляй', 5),
  imperativeFormal: Word('влепляйте', 5),
  imperfect: [],
};

perfectVerbs.set(влеплять.name.text, влеплять);

export { влеплять };