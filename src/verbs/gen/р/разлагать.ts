import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разлагать: PerfectVerb = {
  name: Word('разлагать', 6),
  singular1stPerson: Word('разлагаю', 6),
  singular2ndPerson: Word('разлагаешь', 6),
  singular3rdPerson: Word('разлагает', 6),
  plural1stPerson: Word('разлагаем', 6),
  plural2ndPerson: Word('разлагаете', 6),
  plural3rdPerson: Word('разлагают', 6),
  masculinePast: Word('разлагал', 6),
  femininePast: Word('разлагала', 6),
  neuterPast: Word('разлагало', 6),
  pluralPast: Word('разлагали', 6),
  imperativeInformal: Word('разлагай', 6),
  imperativeFormal: Word('разлагайте', 6),
  imperfect: [],
};

perfectVerbs.set(разлагать.name.text, разлагать);

export { разлагать };