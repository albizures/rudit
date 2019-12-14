import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проявлять: PerfectVerb = {
  name: Word('проявлять', 6),
  singular1stPerson: Word('проявляю', 6),
  singular2ndPerson: Word('проявляешь', 6),
  singular3rdPerson: Word('проявляет', 6),
  plural1stPerson: Word('проявляем', 6),
  plural2ndPerson: Word('проявляете', 6),
  plural3rdPerson: Word('проявляют', 6),
  masculinePast: Word('проявлял', 6),
  femininePast: Word('проявляла', 6),
  neuterPast: Word('проявляло', 6),
  pluralPast: Word('проявляли', 6),
  imperativeInformal: Word('проявляй', 6),
  imperativeFormal: Word('проявляйте', 6),
  imperfect: ['проявить'],
};

perfectVerbs.set(проявлять.name.text, проявлять);

export { проявлять };