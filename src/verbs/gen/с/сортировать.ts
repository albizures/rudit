import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сортировать: PerfectVerb = {
  name: Word('сортировать', 8),
  singular1stPerson: Word('сортирую', 6),
  singular2ndPerson: Word('сортируешь', 6),
  singular3rdPerson: Word('сортирует', 6),
  plural1stPerson: Word('сортируем', 6),
  plural2ndPerson: Word('сортируете', 6),
  plural3rdPerson: Word('сортируют', 6),
  masculinePast: Word('сортировал', 8),
  femininePast: Word('сортировала', 8),
  neuterPast: Word('сортировало', 8),
  pluralPast: Word('сортировали', 8),
  imperativeInformal: Word('сортируй', 6),
  imperativeFormal: Word('сортируйте', 6),
  imperfect: [],
};

perfectVerbs.set(сортировать.name.text, сортировать);

export { сортировать };