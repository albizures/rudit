import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const декретировать: PerfectVerb = {
  name: Word('декретировать', 6),
  singular1stPerson: Word('декретирую', 6),
  singular2ndPerson: Word('декретируешь', 6),
  singular3rdPerson: Word('декретирует', 6),
  plural1stPerson: Word('декретируем', 6),
  plural2ndPerson: Word('декретируете', 6),
  plural3rdPerson: Word('декретируют', 6),
  masculinePast: Word('декретировал', 6),
  femininePast: Word('декретировала', 6),
  neuterPast: Word('декретировало', 6),
  pluralPast: Word('декретировали', 6),
  imperativeInformal: Word('декретируй', 6),
  imperativeFormal: Word('декретируйте', 6),
  imperfect: [],
};

perfectVerbs.set(декретировать.name.text, декретировать);

export { декретировать };