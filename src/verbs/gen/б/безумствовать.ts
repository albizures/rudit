import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const безумствовать: PerfectVerb = {
  name: Word('безумствовать', 3),
  singular1stPerson: Word('безумствую', 3),
  singular2ndPerson: Word('безумствуешь', 3),
  singular3rdPerson: Word('безумствует', 3),
  plural1stPerson: Word('безумствуем', 3),
  plural2ndPerson: Word('безумствуете', 3),
  plural3rdPerson: Word('безумствуют', 3),
  masculinePast: Word('безумствовал', 3),
  femininePast: Word('безумствовала', 3),
  neuterPast: Word('безумствовало', 3),
  pluralPast: Word('безумствовали', 3),
  imperativeInformal: Word('безумствуй', 3),
  imperativeFormal: Word('безумствуйте', 3),
  imperfect: [],
};

perfectVerbs.set(безумствовать.name.text, безумствовать);

export { безумствовать };