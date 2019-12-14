import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изуродовать: PerfectVerb = {
  name: Word('изуродовать', 4),
  singular1stPerson: Word('изуродую', 4),
  singular2ndPerson: Word('изуродуешь', 4),
  singular3rdPerson: Word('изуродует', 4),
  plural1stPerson: Word('изуродуем', 4),
  plural2ndPerson: Word('изуродуете', 4),
  plural3rdPerson: Word('изуродуют', 4),
  masculinePast: Word('изуродовал', 4),
  femininePast: Word('изуродовала', 4),
  neuterPast: Word('изуродовало', 4),
  pluralPast: Word('изуродовали', 4),
  imperativeInformal: Word('изуродуй', 4),
  imperativeFormal: Word('изуродуйте', 4),
  imperfect: ['уродовать'],
};

perfectVerbs.set(изуродовать.name.text, изуродовать);

export { изуродовать };