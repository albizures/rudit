import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const полдничать: PerfectVerb = {
  name: Word('полдничать', 1),
  singular1stPerson: Word('полдничаю', 1),
  singular2ndPerson: Word('полдничаешь', 1),
  singular3rdPerson: Word('полдничает', 1),
  plural1stPerson: Word('полдничаем', 1),
  plural2ndPerson: Word('полдничаете', 1),
  plural3rdPerson: Word('полдничают', 1),
  masculinePast: Word('полдничал', 1),
  femininePast: Word('полдничала', 1),
  neuterPast: Word('полдничало', 1),
  pluralPast: Word('полдничали', 1),
  imperativeInformal: Word('полдничай', 1),
  imperativeFormal: Word('полдничайте', 1),
  imperfect: [],
};

perfectVerbs.set(полдничать.name.text, полдничать);

export { полдничать };