import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разнюхать: PerfectVerb = {
  name: Word('разнюхать', 4),
  singular1stPerson: Word('разнюхаю', 4),
  singular2ndPerson: Word('разнюхаешь', 4),
  singular3rdPerson: Word('разнюхает', 4),
  plural1stPerson: Word('разнюхаем', 4),
  plural2ndPerson: Word('разнюхаете', 4),
  plural3rdPerson: Word('разнюхают', 4),
  masculinePast: Word('разнюхал', 4),
  femininePast: Word('разнюхала', 4),
  neuterPast: Word('разнюхало', 4),
  pluralPast: Word('разнюхали', 4),
  imperativeInformal: Word('разнюхай', 4),
  imperativeFormal: Word('разнюхайте', 4),
  imperfect: [],
};

perfectVerbs.set(разнюхать.name.text, разнюхать);

export { разнюхать };