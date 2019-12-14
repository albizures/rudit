import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const главенствовать: PerfectVerb = {
  name: Word('главенствовать', 4),
  singular1stPerson: Word('главенствую', 4),
  singular2ndPerson: Word('главенствуешь', 4),
  singular3rdPerson: Word('главенствует', 4),
  plural1stPerson: Word('главенствуем', 4),
  plural2ndPerson: Word('главенствуете', 4),
  plural3rdPerson: Word('главенствуют', 4),
  masculinePast: Word('главенствовал', 4),
  femininePast: Word('главенствовала', 4),
  neuterPast: Word('главенствовало', 4),
  pluralPast: Word('главенствовали', 4),
  imperativeInformal: Word('главенствуй', 4),
  imperativeFormal: Word('главенствуйте', 4),
  imperfect: [],
};

perfectVerbs.set(главенствовать.name.text, главенствовать);

export { главенствовать };