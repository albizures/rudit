import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подкислять: PerfectVerb = {
  name: Word('подкислять', 7),
  singular1stPerson: Word('подкисляю', 7),
  singular2ndPerson: Word('подкисляешь', 7),
  singular3rdPerson: Word('подкисляет', 7),
  plural1stPerson: Word('подкисляем', 7),
  plural2ndPerson: Word('подкисляете', 7),
  plural3rdPerson: Word('подкисляют', 7),
  masculinePast: Word('подкислял', 7),
  femininePast: Word('подкисляла', 7),
  neuterPast: Word('подкисляло', 7),
  pluralPast: Word('подкисляли', 7),
  imperativeInformal: Word('подкисляй', 7),
  imperativeFormal: Word('подкисляйте', 7),
  imperfect: [],
};

perfectVerbs.set(подкислять.name.text, подкислять);

export { подкислять };