import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const усыплять: PerfectVerb = {
  name: Word('усыплять', 5),
  singular1stPerson: Word('усыпляю', 5),
  singular2ndPerson: Word('усыпляешь', 5),
  singular3rdPerson: Word('усыпляет', 5),
  plural1stPerson: Word('усыпляем', 5),
  plural2ndPerson: Word('усыпляете', 5),
  plural3rdPerson: Word('усыпляют', 5),
  masculinePast: Word('усыплял', 5),
  femininePast: Word('усыпляла', 5),
  neuterPast: Word('усыпляло', 5),
  pluralPast: Word('усыпляли', 5),
  imperativeInformal: Word('усыпляй', 5),
  imperativeFormal: Word('усыпляйте', 5),
  imperfect: [],
};

perfectVerbs.set(усыплять.name.text, усыплять);

export { усыплять };