import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обревизовать: PerfectVerb = {
  name: Word('обревизовать', 9),
  singular1stPerson: Word('обревизую', 7),
  singular2ndPerson: Word('обревизуешь', 7),
  singular3rdPerson: Word('обревизует', 7),
  plural1stPerson: Word('обревизуем', 7),
  plural2ndPerson: Word('обревизуете', 7),
  plural3rdPerson: Word('обревизуют', 7),
  masculinePast: Word('обревизовал', 9),
  femininePast: Word('обревизовала', 9),
  neuterPast: Word('обревизовало', 9),
  pluralPast: Word('обревизовали', 9),
  imperativeInformal: Word('обревизуй', 7),
  imperativeFormal: Word('обревизуйте', 7),
  imperfect: [],
};

perfectVerbs.set(обревизовать.name.text, обревизовать);

export { обревизовать };