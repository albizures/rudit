import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const деблокировать: PerfectVerb = {
  name: Word('деблокировать', 6),
  singular1stPerson: Word('деблокирую', 6),
  singular2ndPerson: Word('деблокируешь', 6),
  singular3rdPerson: Word('деблокирует', 6),
  plural1stPerson: Word('деблокируем', 6),
  plural2ndPerson: Word('деблокируете', 6),
  plural3rdPerson: Word('деблокируют', 6),
  masculinePast: Word('деблокировал', 6),
  femininePast: Word('деблокировала', 6),
  neuterPast: Word('деблокировало', 6),
  pluralPast: Word('деблокировали', 6),
  imperativeInformal: Word('деблокируй', 6),
  imperativeFormal: Word('деблокируйте', 6),
  imperfect: [],
};

perfectVerbs.set(деблокировать.name.text, деблокировать);

export { деблокировать };