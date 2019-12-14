import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const либеральничать: PerfectVerb = {
  name: Word('либеральничать', 5),
  singular1stPerson: Word('либеральничаю', 5),
  singular2ndPerson: Word('либеральничаешь', 5),
  singular3rdPerson: Word('либеральничает', 5),
  plural1stPerson: Word('либеральничаем', 5),
  plural2ndPerson: Word('либеральничаете', 5),
  plural3rdPerson: Word('либеральничают', 5),
  masculinePast: Word('либеральничал', 5),
  femininePast: Word('либеральничала', 5),
  neuterPast: Word('либеральничало', 5),
  pluralPast: Word('либеральничали', 5),
  imperativeInformal: Word('либеральничай', 5),
  imperativeFormal: Word('либеральничайте', 5),
  imperfect: [],
};

perfectVerbs.set(либеральничать.name.text, либеральничать);

export { либеральничать };