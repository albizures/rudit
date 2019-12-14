import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const исстрелять: PerfectVerb = {
  name: Word('исстрелять', 7),
  singular1stPerson: Word('исстреляю', 7),
  singular2ndPerson: Word('исстреляешь', 7),
  singular3rdPerson: Word('исстреляет', 7),
  plural1stPerson: Word('исстреляем', 7),
  plural2ndPerson: Word('исстреляете', 7),
  plural3rdPerson: Word('исстреляют', 7),
  masculinePast: Word('исстрелял', 7),
  femininePast: Word('исстреляла', 7),
  neuterPast: Word('исстреляло', 7),
  pluralPast: Word('исстреляли', 7),
  imperativeInformal: Word('исстреляй', 7),
  imperativeFormal: Word('исстреляйте', 7),
  imperfect: [],
};

perfectVerbs.set(исстрелять.name.text, исстрелять);

export { исстрелять };