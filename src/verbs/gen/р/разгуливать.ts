import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разгуливать: PerfectVerb = {
  name: Word('разгуливать', 4),
  singular1stPerson: Word('разгуливаю', 4),
  singular2ndPerson: Word('разгуливаешь', 4),
  singular3rdPerson: Word('разгуливает', 4),
  plural1stPerson: Word('разгуливаем', 4),
  plural2ndPerson: Word('разгуливаете', 4),
  plural3rdPerson: Word('разгуливают', 4),
  masculinePast: Word('разгуливал', 4),
  femininePast: Word('разгуливала', 4),
  neuterPast: Word('разгуливало', 4),
  pluralPast: Word('разгуливали', 4),
  imperativeInformal: Word('разгуливай', 4),
  imperativeFormal: Word('разгуливайте', 4),
  imperfect: [],
};

perfectVerbs.set(разгуливать.name.text, разгуливать);

export { разгуливать };