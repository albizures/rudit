import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потрясать: PerfectVerb = {
  name: Word('потрясать', 6),
  singular1stPerson: Word('потрясаю', 6),
  singular2ndPerson: Word('потрясаешь', 6),
  singular3rdPerson: Word('потрясает', 6),
  plural1stPerson: Word('потрясаем', 6),
  plural2ndPerson: Word('потрясаете', 6),
  plural3rdPerson: Word('потрясают', 6),
  masculinePast: Word('потрясал', 6),
  femininePast: Word('потрясала', 6),
  neuterPast: Word('потрясало', 6),
  pluralPast: Word('потрясали', 6),
  imperativeInformal: Word('потрясай', 6),
  imperativeFormal: Word('потрясайте', 6),
  imperfect: ['потрясти'],
};

perfectVerbs.set(потрясать.name.text, потрясать);

export { потрясать };