import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const насильничать: PerfectVerb = {
  name: Word('насильничать', 3),
  singular1stPerson: Word('насильничаю', 3),
  singular2ndPerson: Word('насильничаешь', 3),
  singular3rdPerson: Word('насильничает', 3),
  plural1stPerson: Word('насильничаем', 3),
  plural2ndPerson: Word('насильничаете', 3),
  plural3rdPerson: Word('насильничают', 3),
  masculinePast: Word('насильничал', 3),
  femininePast: Word('насильничала', 3),
  neuterPast: Word('насильничало', 3),
  pluralPast: Word('насильничали', 3),
  imperativeInformal: Word('насильничай', 3),
  imperativeFormal: Word('насильничайте', 3),
  imperfect: [],
};

perfectVerbs.set(насильничать.name.text, насильничать);

export { насильничать };