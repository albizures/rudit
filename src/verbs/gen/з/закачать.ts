import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закачать: PerfectVerb = {
  name: Word('закачать', 5),
  singular1stPerson: Word('закачаю', 5),
  singular2ndPerson: Word('закачаешь', 5),
  singular3rdPerson: Word('закачает', 5),
  plural1stPerson: Word('закачаем', 5),
  plural2ndPerson: Word('закачаете', 5),
  plural3rdPerson: Word('закачают', 5),
  masculinePast: Word('закачал', 5),
  femininePast: Word('закачала', 5),
  neuterPast: Word('закачало', 5),
  pluralPast: Word('закачали', 5),
  imperativeInformal: Word('закачай', 5),
  imperativeFormal: Word('закачайте', 5),
  imperfect: [],
};

perfectVerbs.set(закачать.name.text, закачать);

export { закачать };