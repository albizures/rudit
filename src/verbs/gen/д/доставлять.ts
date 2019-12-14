import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доставлять: PerfectVerb = {
  name: Word('доставлять', 7),
  singular1stPerson: Word('доставляю', 7),
  singular2ndPerson: Word('доставляешь', 7),
  singular3rdPerson: Word('доставляет', 7),
  plural1stPerson: Word('доставляем', 7),
  plural2ndPerson: Word('доставляете', 7),
  plural3rdPerson: Word('доставляют', 7),
  masculinePast: Word('доставлял', 7),
  femininePast: Word('доставляла', 7),
  neuterPast: Word('доставляло', 7),
  pluralPast: Word('доставляли', 7),
  imperativeInformal: Word('доставляй', 7),
  imperativeFormal: Word('доставляйте', 7),
  imperfect: ['доставить'],
};

perfectVerbs.set(доставлять.name.text, доставлять);

export { доставлять };