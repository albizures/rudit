import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посодействовать: PerfectVerb = {
  name: Word('посодействовать', 5),
  singular1stPerson: Word('посодействую', 5),
  singular2ndPerson: Word('посодействуешь', 5),
  singular3rdPerson: Word('посодействует', 5),
  plural1stPerson: Word('посодействуем', 5),
  plural2ndPerson: Word('посодействуете', 5),
  plural3rdPerson: Word('посодействуют', 5),
  masculinePast: Word('посодействовал', 5),
  femininePast: Word('посодействовала', 5),
  neuterPast: Word('посодействовало', 5),
  pluralPast: Word('посодействовали', 5),
  imperativeInformal: Word('посодействуй', 5),
  imperativeFormal: Word('посодействуйте', 5),
  imperfect: ['содействовать'],
};

perfectVerbs.set(посодействовать.name.text, посодействовать);

export { посодействовать };