import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const экспортировать: PerfectVerb = {
  name: Word('экспортировать', 7),
  singular1stPerson: Word('экспортирую', 7),
  singular2ndPerson: Word('экспортируешь', 7),
  singular3rdPerson: Word('экспортирует', 7),
  plural1stPerson: Word('экспортируем', 7),
  plural2ndPerson: Word('экспортируете', 7),
  plural3rdPerson: Word('экспортируют', 7),
  masculinePast: Word('экспортировал', 7),
  femininePast: Word('экспортировала', 7),
  neuterPast: Word('экспортировало', 7),
  pluralPast: Word('экспортировали', 7),
  imperativeInformal: Word('экспортируй', 7),
  imperativeFormal: Word('экспортируйте', 7),
  imperfect: [],
};

perfectVerbs.set(экспортировать.name.text, экспортировать);

export { экспортировать };