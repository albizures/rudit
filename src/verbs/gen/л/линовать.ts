import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const линовать: PerfectVerb = {
  name: Word('линовать', 5),
  singular1stPerson: Word('линую', 3),
  singular2ndPerson: Word('линуешь', 3),
  singular3rdPerson: Word('линует', 3),
  plural1stPerson: Word('линуем', 3),
  plural2ndPerson: Word('линуете', 3),
  plural3rdPerson: Word('линуют', 3),
  masculinePast: Word('линовал', 5),
  femininePast: Word('линовала', 5),
  neuterPast: Word('линовало', 5),
  pluralPast: Word('линовали', 5),
  imperativeInformal: Word('линуй', 3),
  imperativeFormal: Word('линуйте', 3),
  imperfect: [],
};

perfectVerbs.set(линовать.name.text, линовать);

export { линовать };