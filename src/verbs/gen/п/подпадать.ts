import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подпадать: PerfectVerb = {
  name: Word('подпадать', 6),
  singular1stPerson: Word('подпадаю', 6),
  singular2ndPerson: Word('подпадаешь', 6),
  singular3rdPerson: Word('подпадает', 6),
  plural1stPerson: Word('подпадаем', 6),
  plural2ndPerson: Word('подпадаете', 6),
  plural3rdPerson: Word('подпадают', 6),
  masculinePast: Word('подпадал', 6),
  femininePast: Word('подпадала', 6),
  neuterPast: Word('подпадало', 6),
  pluralPast: Word('подпадали', 6),
  imperativeInformal: Word('подпадай', 6),
  imperativeFormal: Word('подпадайте', 6),
  imperfect: [],
};

perfectVerbs.set(подпадать.name.text, подпадать);

export { подпадать };