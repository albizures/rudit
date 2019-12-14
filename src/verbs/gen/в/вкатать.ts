import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вкатать: PerfectVerb = {
  name: Word('вкатать', 4),
  singular1stPerson: Word('вкатаю', 4),
  singular2ndPerson: Word('вкатаешь', 4),
  singular3rdPerson: Word('вкатает', 4),
  plural1stPerson: Word('вкатаем', 4),
  plural2ndPerson: Word('вкатаете', 4),
  plural3rdPerson: Word('вкатают', 4),
  masculinePast: Word('вкатал', 4),
  femininePast: Word('вкатала', 4),
  neuterPast: Word('вкатало', 4),
  pluralPast: Word('вкатали', 4),
  imperativeInformal: Word('вкатай', 4),
  imperativeFormal: Word('вкатайте', 4),
  imperfect: [],
};

perfectVerbs.set(вкатать.name.text, вкатать);

export { вкатать };