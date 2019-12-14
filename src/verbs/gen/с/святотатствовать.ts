import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const святотатствовать: PerfectVerb = {
  name: Word('святотатствовать', 6),
  singular1stPerson: Word('святотатствую', 6),
  singular2ndPerson: Word('святотатствуешь', 6),
  singular3rdPerson: Word('святотатствует', 6),
  plural1stPerson: Word('святотатствуем', 6),
  plural2ndPerson: Word('святотатствуете', 6),
  plural3rdPerson: Word('святотатствуют', 6),
  masculinePast: Word('святотатствовал', 6),
  femininePast: Word('святотатствовала', 6),
  neuterPast: Word('святотатствовало', 6),
  pluralPast: Word('святотатствовали', 6),
  imperativeInformal: Word('святотатствуй', 6),
  imperativeFormal: Word('святотатствуйте', 6),
  imperfect: [],
};

perfectVerbs.set(святотатствовать.name.text, святотатствовать);

export { святотатствовать };