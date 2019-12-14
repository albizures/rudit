import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наставлять: PerfectVerb = {
  name: Word('наставлять', 7),
  singular1stPerson: Word('наставляю', 7),
  singular2ndPerson: Word('наставляешь', 7),
  singular3rdPerson: Word('наставляет', 7),
  plural1stPerson: Word('наставляем', 7),
  plural2ndPerson: Word('наставляете', 7),
  plural3rdPerson: Word('наставляют', 7),
  masculinePast: Word('наставлял', 7),
  femininePast: Word('наставляла', 7),
  neuterPast: Word('наставляло', 7),
  pluralPast: Word('наставляли', 7),
  imperativeInformal: Word('наставляй', 7),
  imperativeFormal: Word('наставляйте', 7),
  imperfect: ['наставить'],
};

perfectVerbs.set(наставлять.name.text, наставлять);

export { наставлять };