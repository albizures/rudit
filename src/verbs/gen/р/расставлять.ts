import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расставлять: PerfectVerb = {
  name: Word('расставлять', 8),
  singular1stPerson: Word('расставляю', 8),
  singular2ndPerson: Word('расставляешь', 8),
  singular3rdPerson: Word('расставляет', 8),
  plural1stPerson: Word('расставляем', 8),
  plural2ndPerson: Word('расставляете', 8),
  plural3rdPerson: Word('расставляют', 8),
  masculinePast: Word('расставлял', 8),
  femininePast: Word('расставляла', 8),
  neuterPast: Word('расставляло', 8),
  pluralPast: Word('расставляли', 8),
  imperativeInformal: Word('расставляй', 8),
  imperativeFormal: Word('расставляйте', 8),
  imperfect: ['расставить'],
};

perfectVerbs.set(расставлять.name.text, расставлять);

export { расставлять };