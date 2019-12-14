import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изуверствовать: PerfectVerb = {
  name: Word('изуверствовать', 4),
  singular1stPerson: Word('изуверствую', 4),
  singular2ndPerson: Word('изуверствуешь', 4),
  singular3rdPerson: Word('изуверствует', 4),
  plural1stPerson: Word('изуверствуем', 4),
  plural2ndPerson: Word('изуверствуете', 4),
  plural3rdPerson: Word('изуверствуют', 4),
  masculinePast: Word('изуверствовал', 4),
  femininePast: Word('изуверствовала', 4),
  neuterPast: Word('изуверствовало', 4),
  pluralPast: Word('изуверствовали', 4),
  imperativeInformal: Word('изуверствуй', 4),
  imperativeFormal: Word('изуверствуйте', 4),
  imperfect: [],
};

perfectVerbs.set(изуверствовать.name.text, изуверствовать);

export { изуверствовать };