import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const представлять: PerfectVerb = {
  name: Word('представлять', 9),
  singular1stPerson: Word('представляю', 9),
  singular2ndPerson: Word('представляешь', 9),
  singular3rdPerson: Word('представляет', 9),
  plural1stPerson: Word('представляем', 9),
  plural2ndPerson: Word('представляете', 9),
  plural3rdPerson: Word('представляют', 9),
  masculinePast: Word('представлял', 9),
  femininePast: Word('представляла', 9),
  neuterPast: Word('представляло', 9),
  pluralPast: Word('представляли', 9),
  imperativeInformal: Word('представляй', 9),
  imperativeFormal: Word('представляйте', 9),
  imperfect: ['представить'],
};

perfectVerbs.set(представлять.name.text, представлять);

export { представлять };