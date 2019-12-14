import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const блаженствовать: PerfectVerb = {
  name: Word('блаженствовать', 4),
  singular1stPerson: Word('блаженствую', 4),
  singular2ndPerson: Word('блаженствуешь', 4),
  singular3rdPerson: Word('блаженствует', 4),
  plural1stPerson: Word('блаженствуем', 4),
  plural2ndPerson: Word('блаженствуете', 4),
  plural3rdPerson: Word('блаженствуют', 4),
  masculinePast: Word('блаженствовал', 4),
  femininePast: Word('блаженствовала', 4),
  neuterPast: Word('блаженствовало', 4),
  pluralPast: Word('блаженствовали', 4),
  imperativeInformal: Word('блаженствуй', 4),
  imperativeFormal: Word('блаженствуйте', 4),
  imperfect: [],
};

perfectVerbs.set(блаженствовать.name.text, блаженствовать);

export { блаженствовать };