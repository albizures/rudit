import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const излишествовать: PerfectVerb = {
  name: Word('излишествовать', 3),
  singular1stPerson: Word('излишествую', 3),
  singular2ndPerson: Word('излишествуешь', 3),
  singular3rdPerson: Word('излишествует', 3),
  plural1stPerson: Word('излишествуем', 3),
  plural2ndPerson: Word('излишествуете', 3),
  plural3rdPerson: Word('излишествуют', 3),
  masculinePast: Word('излишествовал', 3),
  femininePast: Word('излишествовала', 3),
  neuterPast: Word('излишествовало', 3),
  pluralPast: Word('излишествовали', 3),
  imperativeInformal: Word('излишествуй', 3),
  imperativeFormal: Word('излишествуйте', 3),
  imperfect: [],
};

perfectVerbs.set(излишествовать.name.text, излишествовать);

export { излишествовать };