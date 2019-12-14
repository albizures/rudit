import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запрятать: PerfectVerb = {
  name: Word('запрятать', 4),
  singular1stPerson: Word('запрячу', 4),
  singular2ndPerson: Word('запрячешь', 4),
  singular3rdPerson: Word('запрячет', 4),
  plural1stPerson: Word('запрячем', 4),
  plural2ndPerson: Word('запрячете', 4),
  plural3rdPerson: Word('запрячут', 4),
  masculinePast: Word('запрятал', 4),
  femininePast: Word('запрятала', 4),
  neuterPast: Word('запрятало', 4),
  pluralPast: Word('запрятали', 4),
  imperativeInformal: Word('запрячь', 4),
  imperativeFormal: Word('запрячьте', 4),
  imperfect: [],
};

perfectVerbs.set(запрятать.name.text, запрятать);

export { запрятать };