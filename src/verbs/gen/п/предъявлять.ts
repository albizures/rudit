import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предъявлять: PerfectVerb = {
  name: Word('предъявлять', 8),
  singular1stPerson: Word('предъявляю', 8),
  singular2ndPerson: Word('предъявляешь', 8),
  singular3rdPerson: Word('предъявляет', 8),
  plural1stPerson: Word('предъявляем', 8),
  plural2ndPerson: Word('предъявляете', 8),
  plural3rdPerson: Word('предъявляют', 8),
  masculinePast: Word('предъявлял', 8),
  femininePast: Word('предъявляла', 8),
  neuterPast: Word('предъявляло', 8),
  pluralPast: Word('предъявляли', 8),
  imperativeInformal: Word('предъявляй', 8),
  imperativeFormal: Word('предъявляйте', 8),
  imperfect: ['предъявить'],
};

perfectVerbs.set(предъявлять.name.text, предъявлять);

export { предъявлять };