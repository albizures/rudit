import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const попрятать: PerfectVerb = {
  name: Word('попрятать', 4),
  singular1stPerson: Word('попрячу', 4),
  singular2ndPerson: Word('попрячешь', 4),
  singular3rdPerson: Word('попрячет', 4),
  plural1stPerson: Word('попрячем', 4),
  plural2ndPerson: Word('попрячете', 4),
  plural3rdPerson: Word('попрячут', 4),
  masculinePast: Word('попрятал', 4),
  femininePast: Word('попрятала', 4),
  neuterPast: Word('попрятало', 4),
  pluralPast: Word('попрятали', 4),
  imperativeInformal: Word('попрячь', 4),
  imperativeFormal: Word('попрячьте', 4),
  imperfect: [],
};

perfectVerbs.set(попрятать.name.text, попрятать);

export { попрятать };