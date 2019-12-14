import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подымать: PerfectVerb = {
  name: Word('подымать', 5),
  singular1stPerson: Word('подымаю', 5),
  singular2ndPerson: Word('подымаешь', 5),
  singular3rdPerson: Word('подымает', 5),
  plural1stPerson: Word('подымаем', 5),
  plural2ndPerson: Word('подымаете', 5),
  plural3rdPerson: Word('подымают', 5),
  masculinePast: Word('подымал', 5),
  femininePast: Word('подымала', 5),
  neuterPast: Word('подымало', 5),
  pluralPast: Word('подымали', 5),
  imperativeInformal: Word('подымай', 5),
  imperativeFormal: Word('подымайте', 5),
  imperfect: [],
};

perfectVerbs.set(подымать.name.text, подымать);

export { подымать };