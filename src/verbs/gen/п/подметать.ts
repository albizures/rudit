import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подметать: PerfectVerb = {
  name: Word('подметать', 6),
  singular1stPerson: Word('подметаю', 6),
  singular2ndPerson: Word('подметаешь', 6),
  singular3rdPerson: Word('подметает', 6),
  plural1stPerson: Word('подметаем', 6),
  plural2ndPerson: Word('подметаете', 6),
  plural3rdPerson: Word('подметают', 6),
  masculinePast: Word('подметал', 6),
  femininePast: Word('подметала', 6),
  neuterPast: Word('подметало', 6),
  pluralPast: Word('подметали', 6),
  imperativeInformal: Word('подметай', 6),
  imperativeFormal: Word('подметайте', 6),
  imperfect: ['подмести'],
};

perfectVerbs.set(подметать.name.text, подметать);

export { подметать };