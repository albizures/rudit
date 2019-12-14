import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закреплять: PerfectVerb = {
  name: Word('закреплять', 7),
  singular1stPerson: Word('закрепляю', 7),
  singular2ndPerson: Word('закрепляешь', 7),
  singular3rdPerson: Word('закрепляет', 7),
  plural1stPerson: Word('закрепляем', 7),
  plural2ndPerson: Word('закрепляете', 7),
  plural3rdPerson: Word('закрепляют', 7),
  masculinePast: Word('закреплял', 7),
  femininePast: Word('закрепляла', 7),
  neuterPast: Word('закрепляло', 7),
  pluralPast: Word('закрепляли', 7),
  imperativeInformal: Word('закрепляй', 7),
  imperativeFormal: Word('закрепляйте', 7),
  imperfect: [],
};

perfectVerbs.set(закреплять.name.text, закреплять);

export { закреплять };