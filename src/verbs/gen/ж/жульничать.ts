import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const жульничать: PerfectVerb = {
  name: Word('жульничать', 1),
  singular1stPerson: Word('жульничаю', 1),
  singular2ndPerson: Word('жульничаешь', 1),
  singular3rdPerson: Word('жульничает', 1),
  plural1stPerson: Word('жульничаем', 1),
  plural2ndPerson: Word('жульничаете', 1),
  plural3rdPerson: Word('жульничают', 1),
  masculinePast: Word('жульничал', 1),
  femininePast: Word('жульничала', 1),
  neuterPast: Word('жульничало', 1),
  pluralPast: Word('жульничали', 1),
  imperativeInformal: Word('жульничай', 1),
  imperativeFormal: Word('жульничайте', 1),
  imperfect: [],
};

perfectVerbs.set(жульничать.name.text, жульничать);

export { жульничать };