import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const исцелять: PerfectVerb = {
  name: Word('исцелять', 5),
  singular1stPerson: Word('исцеляю', 5),
  singular2ndPerson: Word('исцеляешь', 5),
  singular3rdPerson: Word('исцеляет', 5),
  plural1stPerson: Word('исцеляем', 5),
  plural2ndPerson: Word('исцеляете', 5),
  plural3rdPerson: Word('исцеляют', 5),
  masculinePast: Word('исцелял', 5),
  femininePast: Word('исцеляла', 5),
  neuterPast: Word('исцеляло', 5),
  pluralPast: Word('исцеляли', 5),
  imperativeInformal: Word('исцеляй', 5),
  imperativeFormal: Word('исцеляйте', 5),
  imperfect: [],
};

perfectVerbs.set(исцелять.name.text, исцелять);

export { исцелять };