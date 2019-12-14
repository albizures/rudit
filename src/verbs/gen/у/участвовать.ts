import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const участвовать: PerfectVerb = {
  name: Word('участвовать', 2),
  singular1stPerson: Word('участвую', 2),
  singular2ndPerson: Word('участвуешь', 2),
  singular3rdPerson: Word('участвует', 2),
  plural1stPerson: Word('участвуем', 2),
  plural2ndPerson: Word('участвуете', 2),
  plural3rdPerson: Word('участвуют', 2),
  masculinePast: Word('участвовал', 2),
  femininePast: Word('участвовала', 2),
  neuterPast: Word('участвовало', 2),
  pluralPast: Word('участвовали', 2),
  imperativeInformal: Word('участвуй', 2),
  imperativeFormal: Word('участвуйте', 2),
  imperfect: [],
};

perfectVerbs.set(участвовать.name.text, участвовать);

export { участвовать };