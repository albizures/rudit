import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прилетать: PerfectVerb = {
  name: Word('прилетать', 6),
  singular1stPerson: Word('прилетаю', 6),
  singular2ndPerson: Word('прилетаешь', 6),
  singular3rdPerson: Word('прилетает', 6),
  plural1stPerson: Word('прилетаем', 6),
  plural2ndPerson: Word('прилетаете', 6),
  plural3rdPerson: Word('прилетают', 6),
  masculinePast: Word('прилетал', 6),
  femininePast: Word('прилетала', 6),
  neuterPast: Word('прилетало', 6),
  pluralPast: Word('прилетали', 6),
  imperativeInformal: Word('прилетай', 6),
  imperativeFormal: Word('прилетайте', 6),
  imperfect: ['прилететь'],
};

perfectVerbs.set(прилетать.name.text, прилетать);

export { прилетать };