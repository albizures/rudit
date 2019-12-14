import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const жертвовать: PerfectVerb = {
  name: Word('жертвовать', 1),
  singular1stPerson: Word('жертвую', 1),
  singular2ndPerson: Word('жертвуешь', 1),
  singular3rdPerson: Word('жертвует', 1),
  plural1stPerson: Word('жертвуем', 1),
  plural2ndPerson: Word('жертвуете', 1),
  plural3rdPerson: Word('жертвуют', 1),
  masculinePast: Word('жертвовал', 1),
  femininePast: Word('жертвовала', 1),
  neuterPast: Word('жертвовало', 1),
  pluralPast: Word('жертвовали', 1),
  imperativeInformal: Word('жертвуй', 1),
  imperativeFormal: Word('жертвуйте', 1),
  imperfect: [],
};

perfectVerbs.set(жертвовать.name.text, жертвовать);

export { жертвовать };