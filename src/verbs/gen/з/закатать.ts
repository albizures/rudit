import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закатать: PerfectVerb = {
  name: Word('закатать', 5),
  singular1stPerson: Word('закатаю', 5),
  singular2ndPerson: Word('закатаешь', 5),
  singular3rdPerson: Word('закатает', 5),
  plural1stPerson: Word('закатаем', 5),
  plural2ndPerson: Word('закатаете', 5),
  plural3rdPerson: Word('закатают', 5),
  masculinePast: Word('закатал', 5),
  femininePast: Word('закатала', 5),
  neuterPast: Word('закатало', 5),
  pluralPast: Word('закатали', 5),
  imperativeInformal: Word('закатай', 5),
  imperativeFormal: Word('закатайте', 5),
  imperfect: [],
};

perfectVerbs.set(закатать.name.text, закатать);

export { закатать };