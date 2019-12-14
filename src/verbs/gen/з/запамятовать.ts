import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запамятовать: PerfectVerb = {
  name: Word('запамятовать', 3),
  singular1stPerson: Word('запамятую', 3),
  singular2ndPerson: Word('запамятуешь', 3),
  singular3rdPerson: Word('запамятует', 3),
  plural1stPerson: Word('запамятуем', 3),
  plural2ndPerson: Word('запамятуете', 3),
  plural3rdPerson: Word('запамятуют', 3),
  masculinePast: Word('запамятовал', 3),
  femininePast: Word('запамятовала', 3),
  neuterPast: Word('запамятовало', 3),
  pluralPast: Word('запамятовали', 3),
  imperativeInformal: Word('запамятуй', 3),
  imperativeFormal: Word('запамятуйте', 3),
  imperfect: [],
};

perfectVerbs.set(запамятовать.name.text, запамятовать);

export { запамятовать };