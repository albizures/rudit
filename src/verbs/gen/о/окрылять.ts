import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окрылять: PerfectVerb = {
  name: Word('окрылять', 5),
  singular1stPerson: Word('окрыляю', 5),
  singular2ndPerson: Word('окрыляешь', 5),
  singular3rdPerson: Word('окрыляет', 5),
  plural1stPerson: Word('окрыляем', 5),
  plural2ndPerson: Word('окрыляете', 5),
  plural3rdPerson: Word('окрыляют', 5),
  masculinePast: Word('окрылял', 5),
  femininePast: Word('окрыляла', 5),
  neuterPast: Word('окрыляло', 5),
  pluralPast: Word('окрыляли', 5),
  imperativeInformal: Word('окрыляй', 5),
  imperativeFormal: Word('окрыляйте', 5),
  imperfect: [],
};

perfectVerbs.set(окрылять.name.text, окрылять);

export { окрылять };