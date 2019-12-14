import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прогневать: PerfectVerb = {
  name: Word('прогневать', 5),
  singular1stPerson: Word('прогневаю', 5),
  singular2ndPerson: Word('прогневаешь', 5),
  singular3rdPerson: Word('прогневает', 5),
  plural1stPerson: Word('прогневаем', 5),
  plural2ndPerson: Word('прогневаете', 5),
  plural3rdPerson: Word('прогневают', 5),
  masculinePast: Word('прогневал', 5),
  femininePast: Word('прогневала', 5),
  neuterPast: Word('прогневало', 5),
  pluralPast: Word('прогневали', 5),
  imperativeInformal: Word('прогневай', 5),
  imperativeFormal: Word('прогневайте', 5),
  imperfect: [],
};

perfectVerbs.set(прогневать.name.text, прогневать);

export { прогневать };