import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бронировать: PerfectVerb = {
  name: Word('бронировать', 8),
  singular1stPerson: Word('бронирую', 6),
  singular2ndPerson: Word('бронируешь', 6),
  singular3rdPerson: Word('бронирует', 6),
  plural1stPerson: Word('бронируем', 6),
  plural2ndPerson: Word('бронируете', 6),
  plural3rdPerson: Word('бронируют', 6),
  masculinePast: Word('бронировал', 8),
  femininePast: Word('бронировала', 8),
  neuterPast: Word('бронировало', 8),
  pluralPast: Word('бронировали', 8),
  imperativeInformal: Word('бронируй', 6),
  imperativeFormal: Word('бронируйте', 6),
  imperfect: [],
};

perfectVerbs.set(бронировать.name.text, бронировать);

export { бронировать };