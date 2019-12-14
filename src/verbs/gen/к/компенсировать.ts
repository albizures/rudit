import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const компенсировать: PerfectVerb = {
  name: Word('компенсировать', 7),
  singular1stPerson: Word('компенсирую', 7),
  singular2ndPerson: Word('компенсируешь', 7),
  singular3rdPerson: Word('компенсирует', 7),
  plural1stPerson: Word('компенсируем', 7),
  plural2ndPerson: Word('компенсируете', 7),
  plural3rdPerson: Word('компенсируют', 7),
  masculinePast: Word('компенсировал', 7),
  femininePast: Word('компенсировала', 7),
  neuterPast: Word('компенсировало', 7),
  pluralPast: Word('компенсировали', 7),
  imperativeInformal: Word('компенсируй', 7),
  imperativeFormal: Word('компенсируйте', 7),
  imperfect: [],
};

perfectVerbs.set(компенсировать.name.text, компенсировать);

export { компенсировать };