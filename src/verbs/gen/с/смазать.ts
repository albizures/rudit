import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смазать: PerfectVerb = {
  name: Word('смазать', 2),
  singular1stPerson: Word('смажу', 2),
  singular2ndPerson: Word('смажешь', 2),
  singular3rdPerson: Word('смажет', 2),
  plural1stPerson: Word('смажем', 2),
  plural2ndPerson: Word('смажете', 2),
  plural3rdPerson: Word('смажут', 2),
  masculinePast: Word('смазал', 2),
  femininePast: Word('смазала', 2),
  neuterPast: Word('смазало', 2),
  pluralPast: Word('смазали', 2),
  imperativeInformal: Word('смажь', 2),
  imperativeFormal: Word('смажьте', 2),
  imperfect: ['смазывать'],
};

perfectVerbs.set(смазать.name.text, смазать);

export { смазать };