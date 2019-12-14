import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обкатать: PerfectVerb = {
  name: Word('обкатать', 5),
  singular1stPerson: Word('обкатаю', 5),
  singular2ndPerson: Word('обкатаешь', 5),
  singular3rdPerson: Word('обкатает', 5),
  plural1stPerson: Word('обкатаем', 5),
  plural2ndPerson: Word('обкатаете', 5),
  plural3rdPerson: Word('обкатают', 5),
  masculinePast: Word('обкатал', 5),
  femininePast: Word('обкатала', 5),
  neuterPast: Word('обкатало', 5),
  pluralPast: Word('обкатали', 5),
  imperativeInformal: Word('обкатай', 5),
  imperativeFormal: Word('обкатайте', 5),
  imperfect: [],
};

perfectVerbs.set(обкатать.name.text, обкатать);

export { обкатать };