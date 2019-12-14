import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прилипать: PerfectVerb = {
  name: Word('прилипать', 6),
  singular1stPerson: Word('прилипаю', 6),
  singular2ndPerson: Word('прилипаешь', 6),
  singular3rdPerson: Word('прилипает', 6),
  plural1stPerson: Word('прилипаем', 6),
  plural2ndPerson: Word('прилипаете', 6),
  plural3rdPerson: Word('прилипают', 6),
  masculinePast: Word('прилипал', 6),
  femininePast: Word('прилипала', 6),
  neuterPast: Word('прилипало', 6),
  pluralPast: Word('прилипали', 6),
  imperativeInformal: Word('прилипай', 6),
  imperativeFormal: Word('прилипайте', 6),
  imperfect: ['прилипнуть'],
};

perfectVerbs.set(прилипать.name.text, прилипать);

export { прилипать };