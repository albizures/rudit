import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подгадать: PerfectVerb = {
  name: Word('подгадать', 6),
  singular1stPerson: Word('подгадаю', 6),
  singular2ndPerson: Word('подгадаешь', 6),
  singular3rdPerson: Word('подгадает', 6),
  plural1stPerson: Word('подгадаем', 6),
  plural2ndPerson: Word('подгадаете', 6),
  plural3rdPerson: Word('подгадают', 6),
  masculinePast: Word('подгадал', 6),
  femininePast: Word('подгадала', 6),
  neuterPast: Word('подгадало', 6),
  pluralPast: Word('подгадали', 6),
  imperativeInformal: Word('подгадай', 6),
  imperativeFormal: Word('подгадайте', 6),
  imperfect: [],
};

perfectVerbs.set(подгадать.name.text, подгадать);

export { подгадать };