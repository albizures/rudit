import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подработать: PerfectVerb = {
  name: Word('подработать', 6),
  singular1stPerson: Word('подработаю', 6),
  singular2ndPerson: Word('подработаешь', 6),
  singular3rdPerson: Word('подработает', 6),
  plural1stPerson: Word('подработаем', 6),
  plural2ndPerson: Word('подработаете', 6),
  plural3rdPerson: Word('подработают', 6),
  masculinePast: Word('подработал', 6),
  femininePast: Word('подработала', 6),
  neuterPast: Word('подработало', 6),
  pluralPast: Word('подработали', 6),
  imperativeInformal: Word('подработай', 6),
  imperativeFormal: Word('подработайте', 6),
  imperfect: [],
};

perfectVerbs.set(подработать.name.text, подработать);

export { подработать };