import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доследовать: PerfectVerb = {
  name: Word('доследовать', 4),
  singular1stPerson: Word('доследую', 4),
  singular2ndPerson: Word('доследуешь', 4),
  singular3rdPerson: Word('доследует', 4),
  plural1stPerson: Word('доследуем', 4),
  plural2ndPerson: Word('доследуете', 4),
  plural3rdPerson: Word('доследуют', 4),
  masculinePast: Word('доследовал', 4),
  femininePast: Word('доследовала', 4),
  neuterPast: Word('доследовало', 4),
  pluralPast: Word('доследовали', 4),
  imperativeInformal: Word('доследуй', 4),
  imperativeFormal: Word('доследуйте', 4),
  imperfect: [],
};

perfectVerbs.set(доследовать.name.text, доследовать);

export { доследовать };