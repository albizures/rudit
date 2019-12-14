import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const транспортировать: PerfectVerb = {
  name: Word('транспортировать', 9),
  singular1stPerson: Word('транспортирую', 9),
  singular2ndPerson: Word('транспортируешь', 9),
  singular3rdPerson: Word('транспортирует', 9),
  plural1stPerson: Word('транспортируем', 9),
  plural2ndPerson: Word('транспортируете', 9),
  plural3rdPerson: Word('транспортируют', 9),
  masculinePast: Word('транспортировал', 9),
  femininePast: Word('транспортировала', 9),
  neuterPast: Word('транспортировало', 9),
  pluralPast: Word('транспортировали', 9),
  imperativeInformal: Word('транспортируй', 9),
  imperativeFormal: Word('транспортируйте', 9),
  imperfect: [],
};

perfectVerbs.set(транспортировать.name.text, транспортировать);

export { транспортировать };