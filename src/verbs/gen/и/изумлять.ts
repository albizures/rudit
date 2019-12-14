import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изумлять: PerfectVerb = {
  name: Word('изумлять', 5),
  singular1stPerson: Word('изумляю', 5),
  singular2ndPerson: Word('изумляешь', 5),
  singular3rdPerson: Word('изумляет', 5),
  plural1stPerson: Word('изумляем', 5),
  plural2ndPerson: Word('изумляете', 5),
  plural3rdPerson: Word('изумляют', 5),
  masculinePast: Word('изумлял', 5),
  femininePast: Word('изумляла', 5),
  neuterPast: Word('изумляло', 5),
  pluralPast: Word('изумляли', 5),
  imperativeInformal: Word('изумляй', 5),
  imperativeFormal: Word('изумляйте', 5),
  imperfect: ['изумить'],
};

perfectVerbs.set(изумлять.name.text, изумлять);

export { изумлять };