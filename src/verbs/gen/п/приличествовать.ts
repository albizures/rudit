import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приличествовать: PerfectVerb = {
  name: Word('приличествовать', 4),
  singular1stPerson: Word('приличествую', 4),
  singular2ndPerson: Word('приличествуешь', 4),
  singular3rdPerson: Word('приличествует', 4),
  plural1stPerson: Word('приличествуем', 4),
  plural2ndPerson: Word('приличествуете', 4),
  plural3rdPerson: Word('приличествуют', 4),
  masculinePast: Word('приличествовал', 4),
  femininePast: Word('приличествовала', 4),
  neuterPast: Word('приличествовало', 4),
  pluralPast: Word('приличествовали', 4),
  imperativeInformal: Word('приличествуй', 4),
  imperativeFormal: Word('приличествуйте', 4),
  imperfect: [],
};

perfectVerbs.set(приличествовать.name.text, приличествовать);

export { приличествовать };