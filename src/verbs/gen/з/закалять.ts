import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закалять: PerfectVerb = {
  name: Word('закалять', 5),
  singular1stPerson: Word('закаляю', 5),
  singular2ndPerson: Word('закаляешь', 5),
  singular3rdPerson: Word('закаляет', 5),
  plural1stPerson: Word('закаляем', 5),
  plural2ndPerson: Word('закаляете', 5),
  plural3rdPerson: Word('закаляют', 5),
  masculinePast: Word('закалял', 5),
  femininePast: Word('закаляла', 5),
  neuterPast: Word('закаляло', 5),
  pluralPast: Word('закаляли', 5),
  imperativeInformal: Word('закаляй', 5),
  imperativeFormal: Word('закаляйте', 5),
  imperfect: [],
};

perfectVerbs.set(закалять.name.text, закалять);

export { закалять };