import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const знаменовать: PerfectVerb = {
  name: Word('знаменовать', 8),
  singular1stPerson: Word('знаменую', 6),
  singular2ndPerson: Word('знаменуешь', 6),
  singular3rdPerson: Word('знаменует', 6),
  plural1stPerson: Word('знаменуем', 6),
  plural2ndPerson: Word('знаменуете', 6),
  plural3rdPerson: Word('знаменуют', 6),
  masculinePast: Word('знаменовал', 8),
  femininePast: Word('знаменовала', 8),
  neuterPast: Word('знаменовало', 8),
  pluralPast: Word('знаменовали', 8),
  imperativeInformal: Word('знаменуй', 6),
  imperativeFormal: Word('знаменуйте', 6),
  imperfect: [],
};

perfectVerbs.set(знаменовать.name.text, знаменовать);

export { знаменовать };