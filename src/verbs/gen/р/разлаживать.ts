import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разлаживать: PerfectVerb = {
  name: Word('разлаживать', 4),
  singular1stPerson: Word('разлаживаю', 4),
  singular2ndPerson: Word('разлаживаешь', 4),
  singular3rdPerson: Word('разлаживает', 4),
  plural1stPerson: Word('разлаживаем', 4),
  plural2ndPerson: Word('разлаживаете', 4),
  plural3rdPerson: Word('разлаживают', 4),
  masculinePast: Word('разлаживал', 4),
  femininePast: Word('разлаживала', 4),
  neuterPast: Word('разлаживало', 4),
  pluralPast: Word('разлаживали', 4),
  imperativeInformal: Word('разлаживай', 4),
  imperativeFormal: Word('разлаживайте', 4),
  imperfect: [],
};

perfectVerbs.set(разлаживать.name.text, разлаживать);

export { разлаживать };