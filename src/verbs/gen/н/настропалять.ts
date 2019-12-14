import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const настропалять: PerfectVerb = {
  name: Word('настропалять', 9),
  singular1stPerson: Word('настропаляю', 9),
  singular2ndPerson: Word('настропаляешь', 9),
  singular3rdPerson: Word('настропаляет', 9),
  plural1stPerson: Word('настропаляем', 9),
  plural2ndPerson: Word('настропаляете', 9),
  plural3rdPerson: Word('настропаляют', 9),
  masculinePast: Word('настропалял', 9),
  femininePast: Word('настропаляла', 9),
  neuterPast: Word('настропаляло', 9),
  pluralPast: Word('настропаляли', 9),
  imperativeInformal: Word('настропаляй', 9),
  imperativeFormal: Word('настропаляйте', 9),
  imperfect: [],
};

perfectVerbs.set(настропалять.name.text, настропалять);

export { настропалять };