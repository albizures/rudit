import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закабалять: PerfectVerb = {
  name: Word('закабалять', 7),
  singular1stPerson: Word('закабаляю', 7),
  singular2ndPerson: Word('закабаляешь', 7),
  singular3rdPerson: Word('закабаляет', 7),
  plural1stPerson: Word('закабаляем', 7),
  plural2ndPerson: Word('закабаляете', 7),
  plural3rdPerson: Word('закабаляют', 7),
  masculinePast: Word('закабалял', 7),
  femininePast: Word('закабаляла', 7),
  neuterPast: Word('закабаляло', 7),
  pluralPast: Word('закабаляли', 7),
  imperativeInformal: Word('закабаляй', 7),
  imperativeFormal: Word('закабаляйте', 7),
  imperfect: [],
};

perfectVerbs.set(закабалять.name.text, закабалять);

export { закабалять };