import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вымазать: PerfectVerb = {
  name: Word('вымазать', 1),
  singular1stPerson: Word('вымажу', 1),
  singular2ndPerson: Word('вымажешь', 1),
  singular3rdPerson: Word('вымажет', 1),
  plural1stPerson: Word('вымажем', 1),
  plural2ndPerson: Word('вымажете', 1),
  plural3rdPerson: Word('вымажут', 1),
  masculinePast: Word('вымазал', 1),
  femininePast: Word('вымазала', 1),
  neuterPast: Word('вымазало', 1),
  pluralPast: Word('вымазали', 1),
  imperativeInformal: Word('вымажи//вы'мажь', 1),
  imperativeFormal: Word('вымажьте', 1),
  imperfect: [],
};

perfectVerbs.set(вымазать.name.text, вымазать);

export { вымазать };