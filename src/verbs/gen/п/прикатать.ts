import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прикатать: PerfectVerb = {
  name: Word('прикатать', 6),
  singular1stPerson: Word('прикатаю', 6),
  singular2ndPerson: Word('прикатаешь', 6),
  singular3rdPerson: Word('прикатает', 6),
  plural1stPerson: Word('прикатаем', 6),
  plural2ndPerson: Word('прикатаете', 6),
  plural3rdPerson: Word('прикатают', 6),
  masculinePast: Word('прикатал', 6),
  femininePast: Word('прикатала', 6),
  neuterPast: Word('прикатало', 6),
  pluralPast: Word('прикатали', 6),
  imperativeInformal: Word('прикатай', 6),
  imperativeFormal: Word('прикатайте', 6),
  imperfect: [],
};

perfectVerbs.set(прикатать.name.text, прикатать);

export { прикатать };