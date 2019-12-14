import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вознаграждать: PerfectVerb = {
  name: Word('вознаграждать', 10),
  singular1stPerson: Word('вознаграждаю', 10),
  singular2ndPerson: Word('вознаграждаешь', 10),
  singular3rdPerson: Word('вознаграждает', 10),
  plural1stPerson: Word('вознаграждаем', 10),
  plural2ndPerson: Word('вознаграждаете', 10),
  plural3rdPerson: Word('вознаграждают', 10),
  masculinePast: Word('вознаграждал', 10),
  femininePast: Word('вознаграждала', 10),
  neuterPast: Word('вознаграждало', 10),
  pluralPast: Word('вознаграждали', 10),
  imperativeInformal: Word('вознаграждай', 10),
  imperativeFormal: Word('вознаграждайте', 10),
  imperfect: [],
};

perfectVerbs.set(вознаграждать.name.text, вознаграждать);

export { вознаграждать };