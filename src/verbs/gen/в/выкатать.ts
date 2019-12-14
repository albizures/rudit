import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выкатать: PerfectVerb = {
  name: Word('выкатать', 1),
  singular1stPerson: Word('выкатаю', 1),
  singular2ndPerson: Word('выкатаешь', 1),
  singular3rdPerson: Word('выкатает', 1),
  plural1stPerson: Word('выкатаем', 1),
  plural2ndPerson: Word('выкатаете', 1),
  plural3rdPerson: Word('выкатают', 1),
  masculinePast: Word('выкатал', 1),
  femininePast: Word('выкатала', 1),
  neuterPast: Word('выкатало', 1),
  pluralPast: Word('выкатали', 1),
  imperativeInformal: Word('выкатай', 1),
  imperativeFormal: Word('выкатайте', 1),
  imperfect: [],
};

perfectVerbs.set(выкатать.name.text, выкатать);

export { выкатать };