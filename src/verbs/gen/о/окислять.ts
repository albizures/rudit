import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окислять: PerfectVerb = {
  name: Word('окислять', 5),
  singular1stPerson: Word('окисляю', 5),
  singular2ndPerson: Word('окисляешь', 5),
  singular3rdPerson: Word('окисляет', 5),
  plural1stPerson: Word('окисляем', 5),
  plural2ndPerson: Word('окисляете', 5),
  plural3rdPerson: Word('окисляют', 5),
  masculinePast: Word('окислял', 5),
  femininePast: Word('окисляла', 5),
  neuterPast: Word('окисляло', 5),
  pluralPast: Word('окисляли', 5),
  imperativeInformal: Word('окисляй', 5),
  imperativeFormal: Word('окисляйте', 5),
  imperfect: [],
};

perfectVerbs.set(окислять.name.text, окислять);

export { окислять };