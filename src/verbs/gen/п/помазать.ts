import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помазать: PerfectVerb = {
  name: Word('помазать', 3),
  singular1stPerson: Word('помажу', 3),
  singular2ndPerson: Word('помажешь', 3),
  singular3rdPerson: Word('помажет', 3),
  plural1stPerson: Word('помажем', 3),
  plural2ndPerson: Word('помажете', 3),
  plural3rdPerson: Word('помажут', 3),
  masculinePast: Word('помазал', 3),
  femininePast: Word('помазала', 3),
  neuterPast: Word('помазало', 3),
  pluralPast: Word('помазали', 3),
  imperativeInformal: Word('помажь', 3),
  imperativeFormal: Word('помажьте', 3),
  imperfect: ['мазать'],
};

perfectVerbs.set(помазать.name.text, помазать);

export { помазать };