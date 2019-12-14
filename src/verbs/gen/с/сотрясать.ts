import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сотрясать: PerfectVerb = {
  name: Word('сотрясать', 6),
  singular1stPerson: Word('сотрясаю', 6),
  singular2ndPerson: Word('сотрясаешь', 6),
  singular3rdPerson: Word('сотрясает', 6),
  plural1stPerson: Word('сотрясаем', 6),
  plural2ndPerson: Word('сотрясаете', 6),
  plural3rdPerson: Word('сотрясают', 6),
  masculinePast: Word('сотрясал', 6),
  femininePast: Word('сотрясала', 6),
  neuterPast: Word('сотрясало', 6),
  pluralPast: Word('сотрясали', 6),
  imperativeInformal: Word('сотрясай', 6),
  imperativeFormal: Word('сотрясайте', 6),
  imperfect: [],
};

perfectVerbs.set(сотрясать.name.text, сотрясать);

export { сотрясать };