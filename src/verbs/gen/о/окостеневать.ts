import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окостеневать: PerfectVerb = {
  name: Word('окостеневать', 9),
  singular1stPerson: Word('окостеневаю', 9),
  singular2ndPerson: Word('окостеневаешь', 9),
  singular3rdPerson: Word('окостеневает', 9),
  plural1stPerson: Word('окостеневаем', 9),
  plural2ndPerson: Word('окостеневаете', 9),
  plural3rdPerson: Word('окостеневают', 9),
  masculinePast: Word('окостеневал', 9),
  femininePast: Word('окостеневала', 9),
  neuterPast: Word('окостеневало', 9),
  pluralPast: Word('окостеневали', 9),
  imperativeInformal: Word('окостеневай', 9),
  imperativeFormal: Word('окостеневайте', 9),
  imperfect: [],
};

perfectVerbs.set(окостеневать.name.text, окостеневать);

export { окостеневать };