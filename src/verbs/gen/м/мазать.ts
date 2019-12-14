import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мазать: PerfectVerb = {
  name: Word('мазать', 1),
  singular1stPerson: Word('мажу', 1),
  singular2ndPerson: Word('мажешь', 1),
  singular3rdPerson: Word('мажет', 1),
  plural1stPerson: Word('мажем', 1),
  plural2ndPerson: Word('мажете', 1),
  plural3rdPerson: Word('мажут', 1),
  masculinePast: Word('мазал', 1),
  femininePast: Word('мазала', 1),
  neuterPast: Word('мазало', 1),
  pluralPast: Word('мазали', 1),
  imperativeInformal: Word('мажь', 1),
  imperativeFormal: Word('мажьте', 1),
  imperfect: ['помазать','намазать','измазать'],
};

perfectVerbs.set(мазать.name.text, мазать);

export { мазать };