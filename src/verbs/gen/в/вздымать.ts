import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вздымать: PerfectVerb = {
  name: Word('вздымать', 5),
  singular1stPerson: Word('вздымаю', 5),
  singular2ndPerson: Word('вздымаешь', 5),
  singular3rdPerson: Word('вздымает', 5),
  plural1stPerson: Word('вздымаем', 5),
  plural2ndPerson: Word('вздымаете', 5),
  plural3rdPerson: Word('вздымают', 5),
  masculinePast: Word('вздымал', 5),
  femininePast: Word('вздымала', 5),
  neuterPast: Word('вздымало', 5),
  pluralPast: Word('вздымали', 5),
  imperativeInformal: Word('вздымай', 5),
  imperativeFormal: Word('вздымайте', 5),
  imperfect: [],
};

perfectVerbs.set(вздымать.name.text, вздымать);

export { вздымать };