import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нагнетать: PerfectVerb = {
  name: Word('нагнетать', 6),
  singular1stPerson: Word('нагнетаю', 6),
  singular2ndPerson: Word('нагнетаешь', 6),
  singular3rdPerson: Word('нагнетает', 6),
  plural1stPerson: Word('нагнетаем', 6),
  plural2ndPerson: Word('нагнетаете', 6),
  plural3rdPerson: Word('нагнетают', 6),
  masculinePast: Word('нагнетал', 6),
  femininePast: Word('нагнетала', 6),
  neuterPast: Word('нагнетало', 6),
  pluralPast: Word('нагнетали', 6),
  imperativeInformal: Word('нагнетай', 6),
  imperativeFormal: Word('нагнетайте', 6),
  imperfect: [],
};

perfectVerbs.set(нагнетать.name.text, нагнетать);

export { нагнетать };