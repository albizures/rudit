import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удивлять: PerfectVerb = {
  name: Word('удивлять', 5),
  singular1stPerson: Word('удивляю', 5),
  singular2ndPerson: Word('удивляешь', 5),
  singular3rdPerson: Word('удивляет', 5),
  plural1stPerson: Word('удивляем', 5),
  plural2ndPerson: Word('удивляете', 5),
  plural3rdPerson: Word('удивляют', 5),
  masculinePast: Word('удивлял', 5),
  femininePast: Word('удивляла', 5),
  neuterPast: Word('удивляло', 5),
  pluralPast: Word('удивляли', 5),
  imperativeInformal: Word('удивляй', 5),
  imperativeFormal: Word('удивляйте', 5),
  imperfect: ['удивить'],
};

perfectVerbs.set(удивлять.name.text, удивлять);

export { удивлять };