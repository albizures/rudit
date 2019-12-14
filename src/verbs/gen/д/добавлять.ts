import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const добавлять: PerfectVerb = {
  name: Word('добавлять', 6),
  singular1stPerson: Word('добавляю', 6),
  singular2ndPerson: Word('добавляешь', 6),
  singular3rdPerson: Word('добавляет', 6),
  plural1stPerson: Word('добавляем', 6),
  plural2ndPerson: Word('добавляете', 6),
  plural3rdPerson: Word('добавляют', 6),
  masculinePast: Word('добавлял', 6),
  femininePast: Word('добавляла', 6),
  neuterPast: Word('добавляло', 6),
  pluralPast: Word('добавляли', 6),
  imperativeInformal: Word('добавляй', 6),
  imperativeFormal: Word('добавляйте', 6),
  imperfect: ['добавить'],
};

perfectVerbs.set(добавлять.name.text, добавлять);

export { добавлять };