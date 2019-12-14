import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пожертвовать: PerfectVerb = {
  name: Word('пожертвовать', 3),
  singular1stPerson: Word('пожертвую', 3),
  singular2ndPerson: Word('пожертвуешь', 3),
  singular3rdPerson: Word('пожертвует', 3),
  plural1stPerson: Word('пожертвуем', 3),
  plural2ndPerson: Word('пожертвуете', 3),
  plural3rdPerson: Word('пожертвуют', 3),
  masculinePast: Word('пожертвовал', 3),
  femininePast: Word('пожертвовала', 3),
  neuterPast: Word('пожертвовало', 3),
  pluralPast: Word('пожертвовали', 3),
  imperativeInformal: Word('пожертвуй', 3),
  imperativeFormal: Word('пожертвуйте', 3),
  imperfect: [],
};

perfectVerbs.set(пожертвовать.name.text, пожертвовать);

export { пожертвовать };