import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разрисовать: PerfectVerb = {
  name: Word('разрисовать', 8),
  singular1stPerson: Word('разрисую', 6),
  singular2ndPerson: Word('разрисуешь', 6),
  singular3rdPerson: Word('разрисует', 6),
  plural1stPerson: Word('разрисуем', 6),
  plural2ndPerson: Word('разрисуете', 6),
  plural3rdPerson: Word('разрисуют', 6),
  masculinePast: Word('разрисовал', 8),
  femininePast: Word('разрисовала', 8),
  neuterPast: Word('разрисовало', 8),
  pluralPast: Word('разрисовали', 8),
  imperativeInformal: Word('разрисуй', 6),
  imperativeFormal: Word('разрисуйте', 6),
  imperfect: [],
};

perfectVerbs.set(разрисовать.name.text, разрисовать);

export { разрисовать };