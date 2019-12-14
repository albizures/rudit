import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const декорировать: PerfectVerb = {
  name: Word('декорировать', 5),
  singular1stPerson: Word('декорирую', 5),
  singular2ndPerson: Word('декорируешь', 5),
  singular3rdPerson: Word('декорирует', 5),
  plural1stPerson: Word('декорируем', 5),
  plural2ndPerson: Word('декорируете', 5),
  plural3rdPerson: Word('декорируют', 5),
  masculinePast: Word('декорировал', 5),
  femininePast: Word('декорировала', 5),
  neuterPast: Word('декорировало', 5),
  pluralPast: Word('декорировали', 5),
  imperativeInformal: Word('декорируй', 5),
  imperativeFormal: Word('декорируйте', 5),
  imperfect: [],
};

perfectVerbs.set(декорировать.name.text, декорировать);

export { декорировать };