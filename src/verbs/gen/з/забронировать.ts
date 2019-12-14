import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const забронировать: PerfectVerb = {
  name: Word('забронировать', 10),
  singular1stPerson: Word('забронирую', 8),
  singular2ndPerson: Word('забронируешь', 8),
  singular3rdPerson: Word('забронирует', 8),
  plural1stPerson: Word('забронируем', 8),
  plural2ndPerson: Word('забронируете', 8),
  plural3rdPerson: Word('забронируют', 8),
  masculinePast: Word('забронировал', 10),
  femininePast: Word('забронировала', 10),
  neuterPast: Word('забронировало', 10),
  pluralPast: Word('забронировали', 10),
  imperativeInformal: Word('забронируй', 8),
  imperativeFormal: Word('забронируйте', 8),
  imperfect: [],
};

perfectVerbs.set(забронировать.name.text, забронировать);

export { забронировать };