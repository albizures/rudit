import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const измазать: PerfectVerb = {
  name: Word('измазать', 3),
  singular1stPerson: Word('измажу', 3),
  singular2ndPerson: Word('измажешь', 3),
  singular3rdPerson: Word('измажет', 3),
  plural1stPerson: Word('измажем', 3),
  plural2ndPerson: Word('измажете', 3),
  plural3rdPerson: Word('измажут', 3),
  masculinePast: Word('измазал', 3),
  femininePast: Word('измазала', 3),
  neuterPast: Word('измазало', 3),
  pluralPast: Word('измазали', 3),
  imperativeInformal: Word('измажь', 3),
  imperativeFormal: Word('измажьте', 3),
  imperfect: [],
};

perfectVerbs.set(измазать.name.text, измазать);

export { измазать };