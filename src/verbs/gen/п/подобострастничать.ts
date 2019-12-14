import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подобострастничать: PerfectVerb = {
  name: Word('подобострастничать', 9),
  singular1stPerson: Word('подобострастничаю', 9),
  singular2ndPerson: Word('подобострастничаешь', 9),
  singular3rdPerson: Word('подобострастничает', 9),
  plural1stPerson: Word('подобострастничаем', 9),
  plural2ndPerson: Word('подобострастничаете', 9),
  plural3rdPerson: Word('подобострастничают', 9),
  masculinePast: Word('подобострастничал', 9),
  femininePast: Word('подобострастничала', 9),
  neuterPast: Word('подобострастничало', 9),
  pluralPast: Word('подобострастничали', 9),
  imperativeInformal: Word('подобострастничай', 9),
  imperativeFormal: Word('подобострастничайте', 9),
  imperfect: [],
};

perfectVerbs.set(подобострастничать.name.text, подобострастничать);

export { подобострастничать };