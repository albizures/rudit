import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размазать: PerfectVerb = {
  name: Word('размазать', 4),
  singular1stPerson: Word('размажу', 4),
  singular2ndPerson: Word('размажешь', 4),
  singular3rdPerson: Word('размажет', 4),
  plural1stPerson: Word('размажем', 4),
  plural2ndPerson: Word('размажете', 4),
  plural3rdPerson: Word('размажут', 4),
  masculinePast: Word('размазал', 4),
  femininePast: Word('размазала', 4),
  neuterPast: Word('размазало', 4),
  pluralPast: Word('размазали', 4),
  imperativeInformal: Word('размажь', 4),
  imperativeFormal: Word('размажьте', 4),
  imperfect: [],
};

perfectVerbs.set(размазать.name.text, размазать);

export { размазать };