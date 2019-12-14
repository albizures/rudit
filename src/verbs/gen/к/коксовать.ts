import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const коксовать: PerfectVerb = {
  name: Word('коксовать', 6),
  singular1stPerson: Word('коксую', 4),
  singular2ndPerson: Word('коксуешь', 4),
  singular3rdPerson: Word('коксует', 4),
  plural1stPerson: Word('коксуем', 4),
  plural2ndPerson: Word('коксуете', 4),
  plural3rdPerson: Word('коксуют', 4),
  masculinePast: Word('коксовал', 6),
  femininePast: Word('коксовала', 6),
  neuterPast: Word('коксовало', 6),
  pluralPast: Word('коксовали', 6),
  imperativeInformal: Word('коксуй', 4),
  imperativeFormal: Word('коксуйте', 4),
  imperfect: [],
};

perfectVerbs.set(коксовать.name.text, коксовать);

export { коксовать };