import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разминировать: PerfectVerb = {
  name: Word('разминировать', 6),
  singular1stPerson: Word('разминирую', 6),
  singular2ndPerson: Word('разминируешь', 6),
  singular3rdPerson: Word('разминирует', 6),
  plural1stPerson: Word('разминируем', 6),
  plural2ndPerson: Word('разминируете', 6),
  plural3rdPerson: Word('разминируют', 6),
  masculinePast: Word('разминировал', 6),
  femininePast: Word('разминировала', 6),
  neuterPast: Word('разминировало', 6),
  pluralPast: Word('разминировали', 6),
  imperativeInformal: Word('разминируй', 6),
  imperativeFormal: Word('разминируйте', 6),
  imperfect: [],
};

perfectVerbs.set(разминировать.name.text, разминировать);

export { разминировать };