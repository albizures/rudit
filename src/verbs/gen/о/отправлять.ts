import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отправлять: PerfectVerb = {
  name: Word('отправлять', 7),
  singular1stPerson: Word('отправляю', 7),
  singular2ndPerson: Word('отправляешь', 7),
  singular3rdPerson: Word('отправляет', 7),
  plural1stPerson: Word('отправляем', 7),
  plural2ndPerson: Word('отправляете', 7),
  plural3rdPerson: Word('отправляют', 7),
  masculinePast: Word('отправлял', 7),
  femininePast: Word('отправляла', 7),
  neuterPast: Word('отправляло', 7),
  pluralPast: Word('отправляли', 7),
  imperativeInformal: Word('отправляй', 7),
  imperativeFormal: Word('отправляйте', 7),
  imperfect: ['отправить'],
};

perfectVerbs.set(отправлять.name.text, отправлять);

export { отправлять };