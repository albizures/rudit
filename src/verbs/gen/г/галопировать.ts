import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const галопировать: PerfectVerb = {
  name: Word('галопировать', 5),
  singular1stPerson: Word('галопирую', 5),
  singular2ndPerson: Word('галопируешь', 5),
  singular3rdPerson: Word('галопирует', 5),
  plural1stPerson: Word('галопируем', 5),
  plural2ndPerson: Word('галопируете', 5),
  plural3rdPerson: Word('галопируют', 5),
  masculinePast: Word('галопировал', 5),
  femininePast: Word('галопировала', 5),
  neuterPast: Word('галопировало', 5),
  pluralPast: Word('галопировали', 5),
  imperativeInformal: Word('галопируй', 5),
  imperativeFormal: Word('галопируйте', 5),
  imperfect: [],
};

perfectVerbs.set(галопировать.name.text, галопировать);

export { галопировать };