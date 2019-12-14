import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const анонсировать: PerfectVerb = {
  name: Word('анонсировать', 5),
  singular1stPerson: Word('анонсирую', 5),
  singular2ndPerson: Word('анонсируешь', 5),
  singular3rdPerson: Word('анонсирует', 5),
  plural1stPerson: Word('анонсируем', 5),
  plural2ndPerson: Word('анонсируете', 5),
  plural3rdPerson: Word('анонсируют', 5),
  masculinePast: Word('анонсировал', 5),
  femininePast: Word('анонсировала', 5),
  neuterPast: Word('анонсировало', 5),
  pluralPast: Word('анонсировали', 5),
  imperativeInformal: Word('анонсируй', 5),
  imperativeFormal: Word('анонсируйте', 5),
  imperfect: [],
};

perfectVerbs.set(анонсировать.name.text, анонсировать);

export { анонсировать };