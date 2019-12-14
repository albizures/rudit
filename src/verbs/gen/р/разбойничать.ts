import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разбойничать: PerfectVerb = {
  name: Word('разбойничать', 4),
  singular1stPerson: Word('разбойничаю', 4),
  singular2ndPerson: Word('разбойничаешь', 4),
  singular3rdPerson: Word('разбойничает', 4),
  plural1stPerson: Word('разбойничаем', 4),
  plural2ndPerson: Word('разбойничаете', 4),
  plural3rdPerson: Word('разбойничают', 4),
  masculinePast: Word('разбойничал', 4),
  femininePast: Word('разбойничала', 4),
  neuterPast: Word('разбойничало', 4),
  pluralPast: Word('разбойничали', 4),
  imperativeInformal: Word('разбойничай', 4),
  imperativeFormal: Word('разбойничайте', 4),
  imperfect: [],
};

perfectVerbs.set(разбойничать.name.text, разбойничать);

export { разбойничать };