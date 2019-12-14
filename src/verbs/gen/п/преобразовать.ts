import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const преобразовать: PerfectVerb = {
  name: Word('преобразовать', 10),
  singular1stPerson: Word('преобразую', 8),
  singular2ndPerson: Word('преобразуешь', 8),
  singular3rdPerson: Word('преобразует', 8),
  plural1stPerson: Word('преобразуем', 8),
  plural2ndPerson: Word('преобразуете', 8),
  plural3rdPerson: Word('преобразуют', 8),
  masculinePast: Word('преобразовал', 10),
  femininePast: Word('преобразовала', 10),
  neuterPast: Word('преобразовало', 10),
  pluralPast: Word('преобразовали', 10),
  imperativeInformal: Word('преобразуй', 8),
  imperativeFormal: Word('преобразуйте', 8),
  imperfect: [],
};

perfectVerbs.set(преобразовать.name.text, преобразовать);

export { преобразовать };