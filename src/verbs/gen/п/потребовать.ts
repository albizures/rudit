import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потребовать: PerfectVerb = {
  name: Word('потребовать', 4),
  singular1stPerson: Word('потребую', 4),
  singular2ndPerson: Word('потребуешь', 4),
  singular3rdPerson: Word('потребует', 4),
  plural1stPerson: Word('потребуем', 4),
  plural2ndPerson: Word('потребуете', 4),
  plural3rdPerson: Word('потребуют', 4),
  masculinePast: Word('потребовал', 4),
  femininePast: Word('потребовала', 4),
  neuterPast: Word('потребовало', 4),
  pluralPast: Word('потребовали', 4),
  imperativeInformal: Word('потребуй', 4),
  imperativeFormal: Word('потребуйте', 4),
  imperfect: ['требовать'],
};

perfectVerbs.set(потребовать.name.text, потребовать);

export { потребовать };