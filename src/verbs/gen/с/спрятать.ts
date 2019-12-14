import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спрятать: PerfectVerb = {
  name: Word('спрятать', 3),
  singular1stPerson: Word('спрячу', 3),
  singular2ndPerson: Word('спрячешь', 3),
  singular3rdPerson: Word('спрячет', 3),
  plural1stPerson: Word('спрячем', 3),
  plural2ndPerson: Word('спрячете', 3),
  plural3rdPerson: Word('спрячут', 3),
  masculinePast: Word('спрятал', 3),
  femininePast: Word('спрятала', 3),
  neuterPast: Word('спрятало', 3),
  pluralPast: Word('спрятали', 3),
  imperativeInformal: Word('спрячь', 3),
  imperativeFormal: Word('спрячьте', 3),
  imperfect: ['прятать'],
};

perfectVerbs.set(спрятать.name.text, спрятать);

export { спрятать };