import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закусать: PerfectVerb = {
  name: Word('закусать', 5),
  singular1stPerson: Word('закусаю', 5),
  singular2ndPerson: Word('закусаешь', 5),
  singular3rdPerson: Word('закусает', 5),
  plural1stPerson: Word('закусаем', 5),
  plural2ndPerson: Word('закусаете', 5),
  plural3rdPerson: Word('закусают', 5),
  masculinePast: Word('закусал', 5),
  femininePast: Word('закусала', 5),
  neuterPast: Word('закусало', 5),
  pluralPast: Word('закусали', 5),
  imperativeInformal: Word('закусай', 5),
  imperativeFormal: Word('закусайте', 5),
  imperfect: [],
};

perfectVerbs.set(закусать.name.text, закусать);

export { закусать };