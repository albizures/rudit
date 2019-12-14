import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const облизать: PerfectVerb = {
  name: Word('облизать', 5),
  singular1stPerson: Word('оближу', 5),
  singular2ndPerson: Word('оближешь', 3),
  singular3rdPerson: Word('оближет', 3),
  plural1stPerson: Word('оближем', 3),
  plural2ndPerson: Word('оближете', 3),
  plural3rdPerson: Word('оближут', 3),
  masculinePast: Word('облизал', 5),
  femininePast: Word('облизала', 5),
  neuterPast: Word('облизало', 5),
  pluralPast: Word('облизали', 5),
  imperativeInformal: Word('оближи', 5),
  imperativeFormal: Word('оближите', 5),
  imperfect: [],
};

perfectVerbs.set(облизать.name.text, облизать);

export { облизать };