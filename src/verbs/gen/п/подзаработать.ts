import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подзаработать: PerfectVerb = {
  name: Word('подзаработать', 8),
  singular1stPerson: Word('подзаработаю', 8),
  singular2ndPerson: Word('подзаработаешь', 8),
  singular3rdPerson: Word('подзаработает', 8),
  plural1stPerson: Word('подзаработаем', 8),
  plural2ndPerson: Word('подзаработаете', 8),
  plural3rdPerson: Word('подзаработают', 8),
  masculinePast: Word('подзаработал', 8),
  femininePast: Word('подзаработала', 8),
  neuterPast: Word('подзаработало', 8),
  pluralPast: Word('подзаработали', 8),
  imperativeInformal: Word('подзаработай', 8),
  imperativeFormal: Word('подзаработайте', 8),
  imperfect: [],
};

perfectVerbs.set(подзаработать.name.text, подзаработать);

export { подзаработать };