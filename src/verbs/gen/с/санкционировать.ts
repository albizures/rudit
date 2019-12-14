import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const санкционировать: PerfectVerb = {
  name: Word('санкционировать', 8),
  singular1stPerson: Word('санкционирую', 8),
  singular2ndPerson: Word('санкционируешь', 8),
  singular3rdPerson: Word('санкционирует', 8),
  plural1stPerson: Word('санкционируем', 8),
  plural2ndPerson: Word('санкционируете', 8),
  plural3rdPerson: Word('санкционируют', 8),
  masculinePast: Word('санкционировал', 8),
  femininePast: Word('санкционировала', 8),
  neuterPast: Word('санкционировало', 8),
  pluralPast: Word('санкционировали', 8),
  imperativeInformal: Word('санкционируй', 8),
  imperativeFormal: Word('санкционируйте', 8),
  imperfect: [],
};

perfectVerbs.set(санкционировать.name.text, санкционировать);

export { санкционировать };