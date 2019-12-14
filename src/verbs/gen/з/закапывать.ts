import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закапывать: PerfectVerb = {
  name: Word('закапывать', 3),
  singular1stPerson: Word('закапываю', 3),
  singular2ndPerson: Word('закапываешь', 3),
  singular3rdPerson: Word('закапывает', 3),
  plural1stPerson: Word('закапываем', 3),
  plural2ndPerson: Word('закапываете', 3),
  plural3rdPerson: Word('закапывают', 3),
  masculinePast: Word('закапывал', 3),
  femininePast: Word('закапывала', 3),
  neuterPast: Word('закапывало', 3),
  pluralPast: Word('закапывали', 3),
  imperativeInformal: Word('закапывай', 3),
  imperativeFormal: Word('закапывайте', 3),
  imperfect: [],
};

perfectVerbs.set(закапывать.name.text, закапывать);

export { закапывать };