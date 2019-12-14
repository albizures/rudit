import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const упрятать: PerfectVerb = {
  name: Word('упрятать', 3),
  singular1stPerson: Word('упрячу', 3),
  singular2ndPerson: Word('упрячешь', 3),
  singular3rdPerson: Word('упрячет', 3),
  plural1stPerson: Word('упрячем', 3),
  plural2ndPerson: Word('упрячете', 3),
  plural3rdPerson: Word('упрячут', 3),
  masculinePast: Word('упрятал', 3),
  femininePast: Word('упрятала', 3),
  neuterPast: Word('упрятало', 3),
  pluralPast: Word('упрятали', 3),
  imperativeInformal: Word('упрячь', 3),
  imperativeFormal: Word('упрячьте', 3),
  imperfect: [],
};

perfectVerbs.set(упрятать.name.text, упрятать);

export { упрятать };