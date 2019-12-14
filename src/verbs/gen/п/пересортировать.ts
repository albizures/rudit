import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пересортировать: PerfectVerb = {
  name: Word('пересортировать', 12),
  singular1stPerson: Word('пересортирую', 10),
  singular2ndPerson: Word('пересортируешь', 10),
  singular3rdPerson: Word('пересортирует', 10),
  plural1stPerson: Word('пересортируем', 10),
  plural2ndPerson: Word('пересортируете', 10),
  plural3rdPerson: Word('пересортируют', 10),
  masculinePast: Word('пересортировал', 12),
  femininePast: Word('пересортировала', 12),
  neuterPast: Word('пересортировало', 12),
  pluralPast: Word('пересортировали', 12),
  imperativeInformal: Word('пересортируй', 10),
  imperativeFormal: Word('пересортируйте', 10),
  imperfect: [],
};

perfectVerbs.set(пересортировать.name.text, пересортировать);

export { пересортировать };