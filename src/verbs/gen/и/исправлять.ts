import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const исправлять: PerfectVerb = {
  name: Word('исправлять', 7),
  singular1stPerson: Word('исправляю', 7),
  singular2ndPerson: Word('исправляешь', 7),
  singular3rdPerson: Word('исправляет', 7),
  plural1stPerson: Word('исправляем', 7),
  plural2ndPerson: Word('исправляете', 7),
  plural3rdPerson: Word('исправляют', 7),
  masculinePast: Word('исправлял', 7),
  femininePast: Word('исправляла', 7),
  neuterPast: Word('исправляло', 7),
  pluralPast: Word('исправляли', 7),
  imperativeInformal: Word('исправляй', 7),
  imperativeFormal: Word('исправляйте', 7),
  imperfect: ['исправить'],
};

perfectVerbs.set(исправлять.name.text, исправлять);

export { исправлять };