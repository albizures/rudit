import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запатентовать: PerfectVerb = {
  name: Word('запатентовать', 10),
  singular1stPerson: Word('запатентую', 8),
  singular2ndPerson: Word('запатентуешь', 8),
  singular3rdPerson: Word('запатентует', 8),
  plural1stPerson: Word('запатентуем', 8),
  plural2ndPerson: Word('запатентуете', 8),
  plural3rdPerson: Word('запатентуют', 8),
  masculinePast: Word('запатентовал', 10),
  femininePast: Word('запатентовала', 10),
  neuterPast: Word('запатентовало', 10),
  pluralPast: Word('запатентовали', 10),
  imperativeInformal: Word('запатентуй', 8),
  imperativeFormal: Word('запатентуйте', 8),
  imperfect: [],
};

perfectVerbs.set(запатентовать.name.text, запатентовать);

export { запатентовать };