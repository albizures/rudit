import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замазать: PerfectVerb = {
  name: Word('замазать', 3),
  singular1stPerson: Word('замажу', 3),
  singular2ndPerson: Word('замажешь', 3),
  singular3rdPerson: Word('замажет', 3),
  plural1stPerson: Word('замажем', 3),
  plural2ndPerson: Word('замажете', 3),
  plural3rdPerson: Word('замажут', 3),
  masculinePast: Word('замазал', 3),
  femininePast: Word('замазала', 3),
  neuterPast: Word('замазало', 3),
  pluralPast: Word('замазали', 3),
  imperativeInformal: Word('замажь', 3),
  imperativeFormal: Word('замажьте', 3),
  imperfect: [],
};

perfectVerbs.set(замазать.name.text, замазать);

export { замазать };