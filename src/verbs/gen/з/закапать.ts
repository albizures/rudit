import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закапать: PerfectVerb = {
  name: Word('закапать', 3),
  singular1stPerson: Word('закапаю', 3),
  singular2ndPerson: Word('закапаешь', 3),
  singular3rdPerson: Word('закапает', 3),
  plural1stPerson: Word('закапаем', 3),
  plural2ndPerson: Word('закапаете', 3),
  plural3rdPerson: Word('закапают', 3),
  masculinePast: Word('закапал', 3),
  femininePast: Word('закапала', 3),
  neuterPast: Word('закапало', 3),
  pluralPast: Word('закапали', 3),
  imperativeInformal: Word('закапай', 3),
  imperativeFormal: Word('закапайте', 3),
  imperfect: [],
};

perfectVerbs.set(закапать.name.text, закапать);

export { закапать };