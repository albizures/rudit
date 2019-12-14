import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стандартизовать: PerfectVerb = {
  name: Word('стандартизовать', 12),
  singular1stPerson: Word('стандартизую', 10),
  singular2ndPerson: Word('стандартизуешь', 10),
  singular3rdPerson: Word('стандартизует', 10),
  plural1stPerson: Word('стандартизуем', 10),
  plural2ndPerson: Word('стандартизуете', 10),
  plural3rdPerson: Word('стандартизуют', 10),
  masculinePast: Word('стандартизовал', 12),
  femininePast: Word('стандартизовала', 12),
  neuterPast: Word('стандартизовало', 12),
  pluralPast: Word('стандартизовали', 12),
  imperativeInformal: Word('стандартизуй', 10),
  imperativeFormal: Word('стандартизуйте', 10),
  imperfect: [],
};

perfectVerbs.set(стандартизовать.name.text, стандартизовать);

export { стандартизовать };