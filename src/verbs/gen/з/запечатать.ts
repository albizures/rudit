import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запечатать: PerfectVerb = {
  name: Word('запечатать', 5),
  singular1stPerson: Word('запечатаю', 5),
  singular2ndPerson: Word('запечатаешь', 5),
  singular3rdPerson: Word('запечатает', 5),
  plural1stPerson: Word('запечатаем', 5),
  plural2ndPerson: Word('запечатаете', 5),
  plural3rdPerson: Word('запечатают', 5),
  masculinePast: Word('запечатал', 5),
  femininePast: Word('запечатала', 5),
  neuterPast: Word('запечатало', 5),
  pluralPast: Word('запечатали', 5),
  imperativeInformal: Word('запечатай', 5),
  imperativeFormal: Word('запечатайте', 5),
  imperfect: [],
};

perfectVerbs.set(запечатать.name.text, запечатать);

export { запечатать };