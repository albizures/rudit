import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закапчивать: PerfectVerb = {
  name: Word('закапчивать', 3),
  singular1stPerson: Word('закапчиваю', 3),
  singular2ndPerson: Word('закапчиваешь', 3),
  singular3rdPerson: Word('закапчивает', 3),
  plural1stPerson: Word('закапчиваем', 3),
  plural2ndPerson: Word('закапчиваете', 3),
  plural3rdPerson: Word('закапчивают', 3),
  masculinePast: Word('закапчивал', 3),
  femininePast: Word('закапчивала', 3),
  neuterPast: Word('закапчивало', 3),
  pluralPast: Word('закапчивали', 3),
  imperativeInformal: Word('закапчивай', 3),
  imperativeFormal: Word('закапчивайте', 3),
  imperfect: [],
};

perfectVerbs.set(закапчивать.name.text, закапчивать);

export { закапчивать };