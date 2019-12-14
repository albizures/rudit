import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const срисовать: PerfectVerb = {
  name: Word('срисовать', 6),
  singular1stPerson: Word('срисую', 4),
  singular2ndPerson: Word('срисуешь', 4),
  singular3rdPerson: Word('срисует', 4),
  plural1stPerson: Word('срисуем', 4),
  plural2ndPerson: Word('срисуете', 4),
  plural3rdPerson: Word('срисуют', 4),
  masculinePast: Word('срисовал', 6),
  femininePast: Word('срисовала', 6),
  neuterPast: Word('срисовало', 6),
  pluralPast: Word('срисовали', 6),
  imperativeInformal: Word('срисуй', 4),
  imperativeFormal: Word('срисуйте', 4),
  imperfect: [],
};

perfectVerbs.set(срисовать.name.text, срисовать);

export { срисовать };