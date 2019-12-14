import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подмазать: PerfectVerb = {
  name: Word('подмазать', 4),
  singular1stPerson: Word('подмажу', 4),
  singular2ndPerson: Word('подмажешь', 4),
  singular3rdPerson: Word('подмажет', 4),
  plural1stPerson: Word('подмажем', 4),
  plural2ndPerson: Word('подмажете', 4),
  plural3rdPerson: Word('подмажут', 4),
  masculinePast: Word('подмазал', 4),
  femininePast: Word('подмазала', 4),
  neuterPast: Word('подмазало', 4),
  pluralPast: Word('подмазали', 4),
  imperativeInformal: Word('подмажь', 4),
  imperativeFormal: Word('подмажьте', 4),
  imperfect: [],
};

perfectVerbs.set(подмазать.name.text, подмазать);

export { подмазать };