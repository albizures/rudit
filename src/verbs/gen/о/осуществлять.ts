import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осуществлять: PerfectVerb = {
  name: Word('осуществлять', 9),
  singular1stPerson: Word('осуществляю', 9),
  singular2ndPerson: Word('осуществляешь', 9),
  singular3rdPerson: Word('осуществляет', 9),
  plural1stPerson: Word('осуществляем', 9),
  plural2ndPerson: Word('осуществляете', 9),
  plural3rdPerson: Word('осуществляют', 9),
  masculinePast: Word('осуществлял', 9),
  femininePast: Word('осуществляла', 9),
  neuterPast: Word('осуществляло', 9),
  pluralPast: Word('осуществляли', 9),
  imperativeInformal: Word('осуществляй', 9),
  imperativeFormal: Word('осуществляйте', 9),
  imperfect: ['осуществить'],
};

perfectVerbs.set(осуществлять.name.text, осуществлять);

export { осуществлять };