import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const безмолвствовать: PerfectVerb = {
  name: Word('безмолвствовать', 4),
  singular1stPerson: Word('безмолвствую', 4),
  singular2ndPerson: Word('безмолвствуешь', 4),
  singular3rdPerson: Word('безмолвствует', 4),
  plural1stPerson: Word('безмолвствуем', 4),
  plural2ndPerson: Word('безмолвствуете', 4),
  plural3rdPerson: Word('безмолвствуют', 4),
  masculinePast: Word('безмолвствовал', 4),
  femininePast: Word('безмолвствовала', 4),
  neuterPast: Word('безмолвствовало', 4),
  pluralPast: Word('безмолвствовали', 4),
  imperativeInformal: Word('безмолвствуй', 4),
  imperativeFormal: Word('безмолвствуйте', 4),
  imperfect: [],
};

perfectVerbs.set(безмолвствовать.name.text, безмолвствовать);

export { безмолвствовать };