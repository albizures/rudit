import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зыкать: PerfectVerb = {
  name: Word('зыкать', 1),
  singular1stPerson: Word('зыкаю', 1),
  singular2ndPerson: Word('зыкаешь', 1),
  singular3rdPerson: Word('зыкает', 1),
  plural1stPerson: Word('зыкаем', 1),
  plural2ndPerson: Word('зыкаете', 1),
  plural3rdPerson: Word('зыкают', 1),
  masculinePast: Word('зыкал', 1),
  femininePast: Word('зыкала', 1),
  neuterPast: Word('зыкало', 1),
  pluralPast: Word('зыкали', 1),
  imperativeInformal: Word('зыкай', 1),
  imperativeFormal: Word('зыкайте', 1),
  imperfect: [],
};

perfectVerbs.set(зыкать.name.text, зыкать);

export { зыкать };