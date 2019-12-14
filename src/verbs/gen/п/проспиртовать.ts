import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проспиртовать: PerfectVerb = {
  name: Word('проспиртовать', 10),
  singular1stPerson: Word('проспиртую', 8),
  singular2ndPerson: Word('проспиртуешь', 8),
  singular3rdPerson: Word('проспиртует', 8),
  plural1stPerson: Word('проспиртуем', 8),
  plural2ndPerson: Word('проспиртуете', 8),
  plural3rdPerson: Word('проспиртуют', 8),
  masculinePast: Word('проспиртовал', 10),
  femininePast: Word('проспиртовала', 10),
  neuterPast: Word('проспиртовало', 10),
  pluralPast: Word('проспиртовали', 10),
  imperativeInformal: Word('проспиртуй', 8),
  imperativeFormal: Word('проспиртуйте', 8),
  imperfect: [],
};

perfectVerbs.set(проспиртовать.name.text, проспиртовать);

export { проспиртовать };