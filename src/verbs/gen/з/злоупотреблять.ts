import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const злоупотреблять: PerfectVerb = {
  name: Word('злоупотреблять', 11),
  singular1stPerson: Word('злоупотребляю', 11),
  singular2ndPerson: Word('злоупотребляешь', 11),
  singular3rdPerson: Word('злоупотребляет', 11),
  plural1stPerson: Word('злоупотребляем', 11),
  plural2ndPerson: Word('злоупотребляете', 11),
  plural3rdPerson: Word('злоупотребляют', 11),
  masculinePast: Word('злоупотреблял', 11),
  femininePast: Word('злоупотребляла', 11),
  neuterPast: Word('злоупотребляло', 11),
  pluralPast: Word('злоупотребляли', 11),
  imperativeInformal: Word('злоупотребляй', 11),
  imperativeFormal: Word('злоупотребляйте', 11),
  imperfect: ['злоупотребить'],
};

perfectVerbs.set(злоупотреблять.name.text, злоупотреблять);

export { злоупотреблять };