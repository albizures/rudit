import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вмазать: PerfectVerb = {
  name: Word('вмазать', 2),
  singular1stPerson: Word('вмажу', 2),
  singular2ndPerson: Word('вмажешь', 2),
  singular3rdPerson: Word('вмажет', 2),
  plural1stPerson: Word('вмажем', 2),
  plural2ndPerson: Word('вмажете', 2),
  plural3rdPerson: Word('вмажут', 2),
  masculinePast: Word('вмазал', 2),
  femininePast: Word('вмазала', 2),
  neuterPast: Word('вмазало', 2),
  pluralPast: Word('вмазали', 2),
  imperativeInformal: Word('вмажь', 2),
  imperativeFormal: Word('вмажьте', 2),
  imperfect: [],
};

perfectVerbs.set(вмазать.name.text, вмазать);

export { вмазать };