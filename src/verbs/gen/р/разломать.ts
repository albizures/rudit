import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разломать: PerfectVerb = {
  name: Word('разломать', 6),
  singular1stPerson: Word('разломаю', 6),
  singular2ndPerson: Word('разломаешь', 6),
  singular3rdPerson: Word('разломает', 6),
  plural1stPerson: Word('разломаем', 6),
  plural2ndPerson: Word('разломаете', 6),
  plural3rdPerson: Word('разломают', 6),
  masculinePast: Word('разломал', 6),
  femininePast: Word('разломала', 6),
  neuterPast: Word('разломало', 6),
  pluralPast: Word('разломали', 6),
  imperativeInformal: Word('разломай', 6),
  imperativeFormal: Word('разломайте', 6),
  imperfect: [],
};

perfectVerbs.set(разломать.name.text, разломать);

export { разломать };