import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const припрятать: PerfectVerb = {
  name: Word('припрятать', 5),
  singular1stPerson: Word('припрячу', 5),
  singular2ndPerson: Word('припрячешь', 5),
  singular3rdPerson: Word('припрячет', 5),
  plural1stPerson: Word('припрячем', 5),
  plural2ndPerson: Word('припрячете', 5),
  plural3rdPerson: Word('припрячут', 5),
  masculinePast: Word('припрятал', 5),
  femininePast: Word('припрятала', 5),
  neuterPast: Word('припрятало', 5),
  pluralPast: Word('припрятали', 5),
  imperativeInformal: Word('припрячь', 5),
  imperativeFormal: Word('припрячьте', 5),
  imperfect: [],
};

perfectVerbs.set(припрятать.name.text, припрятать);

export { припрятать };