import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const денонсировать: PerfectVerb = {
  name: Word('денонсировать', 6),
  singular1stPerson: Word('денонсирую', 6),
  singular2ndPerson: Word('денонсируешь', 6),
  singular3rdPerson: Word('денонсирует', 6),
  plural1stPerson: Word('денонсируем', 6),
  plural2ndPerson: Word('денонсируете', 6),
  plural3rdPerson: Word('денонсируют', 6),
  masculinePast: Word('денонсировал', 6),
  femininePast: Word('денонсировала', 6),
  neuterPast: Word('денонсировало', 6),
  pluralPast: Word('денонсировали', 6),
  imperativeInformal: Word('денонсируй', 6),
  imperativeFormal: Word('денонсируйте', 6),
  imperfect: [],
};

perfectVerbs.set(денонсировать.name.text, денонсировать);

export { денонсировать };