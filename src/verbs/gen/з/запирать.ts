import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запирать: PerfectVerb = {
  name: Word('запирать', 5),
  singular1stPerson: Word('запираю', 5),
  singular2ndPerson: Word('запираешь', 5),
  singular3rdPerson: Word('запирает', 5),
  plural1stPerson: Word('запираем', 5),
  plural2ndPerson: Word('запираете', 5),
  plural3rdPerson: Word('запирают', 5),
  masculinePast: Word('запирал', 5),
  femininePast: Word('запирала', 5),
  neuterPast: Word('запирало', 5),
  pluralPast: Word('запирали', 5),
  imperativeInformal: Word('запирай', 5),
  imperativeFormal: Word('запирайте', 5),
  imperfect: ['запереть'],
};

perfectVerbs.set(запирать.name.text, запирать);

export { запирать };