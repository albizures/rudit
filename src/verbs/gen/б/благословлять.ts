import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const благословлять: PerfectVerb = {
  name: Word('благословлять', 10),
  singular1stPerson: Word('благословляю', 10),
  singular2ndPerson: Word('благословляешь', 10),
  singular3rdPerson: Word('благословляет', 10),
  plural1stPerson: Word('благословляем', 10),
  plural2ndPerson: Word('благословляете', 10),
  plural3rdPerson: Word('благословляют', 10),
  masculinePast: Word('благословлял', 10),
  femininePast: Word('благословляла', 10),
  neuterPast: Word('благословляло', 10),
  pluralPast: Word('благословляли', 10),
  imperativeInformal: Word('благословляй', 10),
  imperativeFormal: Word('благословляйте', 10),
  imperfect: [],
};

perfectVerbs.set(благословлять.name.text, благословлять);

export { благословлять };