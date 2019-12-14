import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разгораживать: PerfectVerb = {
  name: Word('разгораживать', 6),
  singular1stPerson: Word('разгораживаю', 6),
  singular2ndPerson: Word('разгораживаешь', 6),
  singular3rdPerson: Word('разгораживает', 6),
  plural1stPerson: Word('разгораживаем', 6),
  plural2ndPerson: Word('разгораживаете', 6),
  plural3rdPerson: Word('разгораживают', 6),
  masculinePast: Word('разгораживал', 6),
  femininePast: Word('разгораживала', 6),
  neuterPast: Word('разгораживало', 6),
  pluralPast: Word('разгораживали', 6),
  imperativeInformal: Word('разгораживай', 6),
  imperativeFormal: Word('разгораживайте', 6),
  imperfect: [],
};

perfectVerbs.set(разгораживать.name.text, разгораживать);

export { разгораживать };