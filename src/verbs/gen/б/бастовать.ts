import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бастовать: PerfectVerb = {
  name: Word('бастовать', 6),
  singular1stPerson: Word('бастую', 4),
  singular2ndPerson: Word('бастуешь', 4),
  singular3rdPerson: Word('бастует', 4),
  plural1stPerson: Word('бастуем', 4),
  plural2ndPerson: Word('бастуете', 4),
  plural3rdPerson: Word('бастуют', 4),
  masculinePast: Word('бастовал', 6),
  femininePast: Word('бастовала', 6),
  neuterPast: Word('бастовало', 6),
  pluralPast: Word('бастовали', 6),
  imperativeInformal: Word('бастуй', 4),
  imperativeFormal: Word('бастуйте', 4),
  imperfect: [],
};

perfectVerbs.set(бастовать.name.text, бастовать);

export { бастовать };