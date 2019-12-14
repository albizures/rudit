import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заблокировать: PerfectVerb = {
  name: Word('заблокировать', 6),
  singular1stPerson: Word('заблокирую', 6),
  singular2ndPerson: Word('заблокируешь', 6),
  singular3rdPerson: Word('заблокирует', 6),
  plural1stPerson: Word('заблокируем', 6),
  plural2ndPerson: Word('заблокируете', 6),
  plural3rdPerson: Word('заблокируют', 6),
  masculinePast: Word('заблокировал', 6),
  femininePast: Word('заблокировала', 6),
  neuterPast: Word('заблокировало', 6),
  pluralPast: Word('заблокировали', 6),
  imperativeInformal: Word('заблокируй', 6),
  imperativeFormal: Word('заблокируйте', 6),
  imperfect: [],
};

perfectVerbs.set(заблокировать.name.text, заблокировать);

export { заблокировать };