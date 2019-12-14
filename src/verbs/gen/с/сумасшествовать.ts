import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сумасшествовать: PerfectVerb = {
  name: Word('сумасшествовать', 6),
  singular1stPerson: Word('сумасшествую', 6),
  singular2ndPerson: Word('сумасшествуешь', 6),
  singular3rdPerson: Word('сумасшествует', 6),
  plural1stPerson: Word('сумасшествуем', 6),
  plural2ndPerson: Word('сумасшествуете', 6),
  plural3rdPerson: Word('сумасшествуют', 6),
  masculinePast: Word('сумасшествовал', 6),
  femininePast: Word('сумасшествовала', 6),
  neuterPast: Word('сумасшествовало', 6),
  pluralPast: Word('сумасшествовали', 6),
  imperativeInformal: Word('сумасшествуй', 6),
  imperativeFormal: Word('сумасшествуйте', 6),
  imperfect: [],
};

perfectVerbs.set(сумасшествовать.name.text, сумасшествовать);

export { сумасшествовать };