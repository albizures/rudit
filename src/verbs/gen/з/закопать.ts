import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закопать: PerfectVerb = {
  name: Word('закопать', 5),
  singular1stPerson: Word('закопаю', 5),
  singular2ndPerson: Word('закопаешь', 5),
  singular3rdPerson: Word('закопает', 5),
  plural1stPerson: Word('закопаем', 5),
  plural2ndPerson: Word('закопаете', 5),
  plural3rdPerson: Word('закопают', 5),
  masculinePast: Word('закопал', 5),
  femininePast: Word('закопала', 5),
  neuterPast: Word('закопало', 5),
  pluralPast: Word('закопали', 5),
  imperativeInformal: Word('закопай', 5),
  imperativeFormal: Word('закопайте', 5),
  imperfect: [],
};

perfectVerbs.set(закопать.name.text, закопать);

export { закопать };