import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прятать: PerfectVerb = {
  name: Word('прятать', 2),
  singular1stPerson: Word('прячу', 2),
  singular2ndPerson: Word('прячешь', 2),
  singular3rdPerson: Word('прячет', 2),
  plural1stPerson: Word('прячем', 2),
  plural2ndPerson: Word('прячете', 2),
  plural3rdPerson: Word('прячут', 2),
  masculinePast: Word('прятал', 2),
  femininePast: Word('прятала', 2),
  neuterPast: Word('прятало', 2),
  pluralPast: Word('прятали', 2),
  imperativeInformal: Word('прячь', 2),
  imperativeFormal: Word('прячьте', 2),
  imperfect: ['спрятать'],
};

perfectVerbs.set(прятать.name.text, прятать);

export { прятать };