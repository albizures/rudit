import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const направлять: PerfectVerb = {
  name: Word('направлять', 7),
  singular1stPerson: Word('направляю', 7),
  singular2ndPerson: Word('направляешь', 7),
  singular3rdPerson: Word('направляет', 7),
  plural1stPerson: Word('направляем', 7),
  plural2ndPerson: Word('направляете', 7),
  plural3rdPerson: Word('направляют', 7),
  masculinePast: Word('направлял', 7),
  femininePast: Word('направляла', 7),
  neuterPast: Word('направляло', 7),
  pluralPast: Word('направляли', 7),
  imperativeInformal: Word('направляй', 7),
  imperativeFormal: Word('направляйте', 7),
  imperfect: ['направить'],
};

perfectVerbs.set(направлять.name.text, направлять);

export { направлять };