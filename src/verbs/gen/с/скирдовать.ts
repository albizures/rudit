import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скирдовать: PerfectVerb = {
  name: Word('скирдовать', 7),
  singular1stPerson: Word('скирдую', 5),
  singular2ndPerson: Word('скирдуешь', 5),
  singular3rdPerson: Word('скирдует', 5),
  plural1stPerson: Word('скирдуем', 5),
  plural2ndPerson: Word('скирдуете', 5),
  plural3rdPerson: Word('скирдуют', 5),
  masculinePast: Word('скирдовал', 7),
  femininePast: Word('скирдовала', 7),
  neuterPast: Word('скирдовало', 7),
  pluralPast: Word('скирдовали', 7),
  imperativeInformal: Word('скирдуй', 5),
  imperativeFormal: Word('скирдуйте', 5),
  imperfect: [],
};

perfectVerbs.set(скирдовать.name.text, скирдовать);

export { скирдовать };