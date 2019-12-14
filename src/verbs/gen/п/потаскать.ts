import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потаскать: PerfectVerb = {
  name: Word('потаскать', 6),
  singular1stPerson: Word('потаскаю', 6),
  singular2ndPerson: Word('потаскаешь', 6),
  singular3rdPerson: Word('потаскает', 6),
  plural1stPerson: Word('потаскаем', 6),
  plural2ndPerson: Word('потаскаете', 6),
  plural3rdPerson: Word('потаскают', 6),
  masculinePast: Word('потаскал', 6),
  femininePast: Word('потаскала', 6),
  neuterPast: Word('потаскало', 6),
  pluralPast: Word('потаскали', 6),
  imperativeInformal: Word('потаскай', 6),
  imperativeFormal: Word('потаскайте', 6),
  imperfect: [],
};

perfectVerbs.set(потаскать.name.text, потаскать);

export { потаскать };