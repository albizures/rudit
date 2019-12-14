import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разворовать: PerfectVerb = {
  name: Word('разворовать', 8),
  singular1stPerson: Word('разворую', 6),
  singular2ndPerson: Word('разворуешь', 6),
  singular3rdPerson: Word('разворует', 6),
  plural1stPerson: Word('разворуем', 6),
  plural2ndPerson: Word('разворуете', 6),
  plural3rdPerson: Word('разворуют', 6),
  masculinePast: Word('разворовал', 8),
  femininePast: Word('разворовала', 8),
  neuterPast: Word('разворовало', 8),
  pluralPast: Word('разворовали', 8),
  imperativeInformal: Word('разворуй', 6),
  imperativeFormal: Word('разворуйте', 6),
  imperfect: [],
};

perfectVerbs.set(разворовать.name.text, разворовать);

export { разворовать };