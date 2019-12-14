import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прелюбодействовать: PerfectVerb = {
  name: Word('прелюбодействовать', 8),
  singular1stPerson: Word('прелюбодействую', 8),
  singular2ndPerson: Word('прелюбодействуешь', 8),
  singular3rdPerson: Word('прелюбодействует', 8),
  plural1stPerson: Word('прелюбодействуем', 8),
  plural2ndPerson: Word('прелюбодействуете', 8),
  plural3rdPerson: Word('прелюбодействуют', 8),
  masculinePast: Word('прелюбодействовал', 8),
  femininePast: Word('прелюбодействовала', 8),
  neuterPast: Word('прелюбодействовало', 8),
  pluralPast: Word('прелюбодействовали', 8),
  imperativeInformal: Word('прелюбодействуй', 8),
  imperativeFormal: Word('прелюбодействуйте', 8),
  imperfect: [],
};

perfectVerbs.set(прелюбодействовать.name.text, прелюбодействовать);

export { прелюбодействовать };