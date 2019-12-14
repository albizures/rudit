import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const залатать: PerfectVerb = {
  name: Word('залатать', 5),
  singular1stPerson: Word('залатаю', 5),
  singular2ndPerson: Word('залатаешь', 5),
  singular3rdPerson: Word('залатает', 5),
  plural1stPerson: Word('залатаем', 5),
  plural2ndPerson: Word('залатаете', 5),
  plural3rdPerson: Word('залатают', 5),
  masculinePast: Word('залатал', 5),
  femininePast: Word('залатала', 5),
  neuterPast: Word('залатало', 5),
  pluralPast: Word('залатали', 5),
  imperativeInformal: Word('залатай', 5),
  imperativeFormal: Word('залатайте', 5),
  imperfect: [],
};

perfectVerbs.set(залатать.name.text, залатать);

export { залатать };