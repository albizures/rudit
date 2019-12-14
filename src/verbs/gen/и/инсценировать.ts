import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const инсценировать: PerfectVerb = {
  name: Word('инсценировать', 6),
  singular1stPerson: Word('инсценирую', 6),
  singular2ndPerson: Word('инсценируешь', 6),
  singular3rdPerson: Word('инсценирует', 6),
  plural1stPerson: Word('инсценируем', 6),
  plural2ndPerson: Word('инсценируете', 6),
  plural3rdPerson: Word('инсценируют', 6),
  masculinePast: Word('инсценировал', 6),
  femininePast: Word('инсценировала', 6),
  neuterPast: Word('инсценировало', 6),
  pluralPast: Word('инсценировали', 6),
  imperativeInformal: Word('инсценируй', 6),
  imperativeFormal: Word('инсценируйте', 6),
  imperfect: [],
};

perfectVerbs.set(инсценировать.name.text, инсценировать);

export { инсценировать };