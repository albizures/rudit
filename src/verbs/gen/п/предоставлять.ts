import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предоставлять: PerfectVerb = {
  name: Word('предоставлять', 10),
  singular1stPerson: Word('предоставляю', 10),
  singular2ndPerson: Word('предоставляешь', 10),
  singular3rdPerson: Word('предоставляет', 10),
  plural1stPerson: Word('предоставляем', 10),
  plural2ndPerson: Word('предоставляете', 10),
  plural3rdPerson: Word('предоставляют', 10),
  masculinePast: Word('предоставлял', 10),
  femininePast: Word('предоставляла', 10),
  neuterPast: Word('предоставляло', 10),
  pluralPast: Word('предоставляли', 10),
  imperativeInformal: Word('предоставляй', 10),
  imperativeFormal: Word('предоставляйте', 10),
  imperfect: ['предоставить'],
};

perfectVerbs.set(предоставлять.name.text, предоставлять);

export { предоставлять };