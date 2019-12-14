import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сапожничать: PerfectVerb = {
  name: Word('сапожничать', 3),
  singular1stPerson: Word('сапожничаю', 3),
  singular2ndPerson: Word('сапожничаешь', 3),
  singular3rdPerson: Word('сапожничает', 3),
  plural1stPerson: Word('сапожничаем', 3),
  plural2ndPerson: Word('сапожничаете', 3),
  plural3rdPerson: Word('сапожничают', 3),
  masculinePast: Word('сапожничал', 3),
  femininePast: Word('сапожничала', 3),
  neuterPast: Word('сапожничало', 3),
  pluralPast: Word('сапожничали', 3),
  imperativeInformal: Word('сапожничай', 3),
  imperativeFormal: Word('сапожничайте', 3),
  imperfect: [],
};

perfectVerbs.set(сапожничать.name.text, сапожничать);

export { сапожничать };