import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const унаследовать: PerfectVerb = {
  name: Word('унаследовать', 5),
  singular1stPerson: Word('унаследую', 5),
  singular2ndPerson: Word('унаследуешь', 5),
  singular3rdPerson: Word('унаследует', 5),
  plural1stPerson: Word('унаследуем', 5),
  plural2ndPerson: Word('унаследуете', 5),
  plural3rdPerson: Word('унаследуют', 5),
  masculinePast: Word('унаследовал', 5),
  femininePast: Word('унаследовала', 5),
  neuterPast: Word('унаследовало', 5),
  pluralPast: Word('унаследовали', 5),
  imperativeInformal: Word('унаследуй', 5),
  imperativeFormal: Word('унаследуйте', 5),
  imperfect: ['наследовать'],
};

perfectVerbs.set(унаследовать.name.text, унаследовать);

export { унаследовать };