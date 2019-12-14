import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обмазать: PerfectVerb = {
  name: Word('обмазать', 3),
  singular1stPerson: Word('обмажу', 3),
  singular2ndPerson: Word('обмажешь', 3),
  singular3rdPerson: Word('обмажет', 3),
  plural1stPerson: Word('обмажем', 3),
  plural2ndPerson: Word('обмажете', 3),
  plural3rdPerson: Word('обмажут', 3),
  masculinePast: Word('обмазал', 3),
  femininePast: Word('обмазала', 3),
  neuterPast: Word('обмазало', 3),
  pluralPast: Word('обмазали', 3),
  imperativeInformal: Word('обмажь', 3),
  imperativeFormal: Word('обмажьте', 3),
  imperfect: [],
};

perfectVerbs.set(обмазать.name.text, обмазать);

export { обмазать };