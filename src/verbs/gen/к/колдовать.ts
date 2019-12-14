import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const колдовать: PerfectVerb = {
  name: Word('колдовать', 6),
  singular1stPerson: Word('колдую', 4),
  singular2ndPerson: Word('колдуешь', 4),
  singular3rdPerson: Word('колдует', 4),
  plural1stPerson: Word('колдуем', 4),
  plural2ndPerson: Word('колдуете', 4),
  plural3rdPerson: Word('колдуют', 4),
  masculinePast: Word('колдовал', 6),
  femininePast: Word('колдовала', 6),
  neuterPast: Word('колдовало', 6),
  pluralPast: Word('колдовали', 6),
  imperativeInformal: Word('колдуй', 4),
  imperativeFormal: Word('колдуйте', 4),
  imperfect: [],
};

perfectVerbs.set(колдовать.name.text, колдовать);

export { колдовать };