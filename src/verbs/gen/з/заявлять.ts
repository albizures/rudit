import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заявлять: PerfectVerb = {
  name: Word('заявлять', 5),
  singular1stPerson: Word('заявляю', 5),
  singular2ndPerson: Word('заявляешь', 5),
  singular3rdPerson: Word('заявляет', 5),
  plural1stPerson: Word('заявляем', 5),
  plural2ndPerson: Word('заявляете', 5),
  plural3rdPerson: Word('заявляют', 5),
  masculinePast: Word('заявлял', 5),
  femininePast: Word('заявляла', 5),
  neuterPast: Word('заявляло', 5),
  pluralPast: Word('заявляли', 5),
  imperativeInformal: Word('заявляй', 5),
  imperativeFormal: Word('заявляйте', 5),
  imperfect: ['заявить'],
};

perfectVerbs.set(заявлять.name.text, заявлять);

export { заявлять };