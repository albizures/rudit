import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лабиализовать: PerfectVerb = {
  name: Word('лабиализовать', 10),
  singular1stPerson: Word('лабиализую', 8),
  singular2ndPerson: Word('лабиализуешь', 8),
  singular3rdPerson: Word('лабиализует', 8),
  plural1stPerson: Word('лабиализуем', 8),
  plural2ndPerson: Word('лабиализуете', 8),
  plural3rdPerson: Word('лабиализуют', 8),
  masculinePast: Word('лабиализовал', 10),
  femininePast: Word('лабиализовала', 10),
  neuterPast: Word('лабиализовало', 10),
  pluralPast: Word('лабиализовали', 10),
  imperativeInformal: Word('лабиализуй', 8),
  imperativeFormal: Word('лабиализуйте', 8),
  imperfect: [],
};

perfectVerbs.set(лабиализовать.name.text, лабиализовать);

export { лабиализовать };