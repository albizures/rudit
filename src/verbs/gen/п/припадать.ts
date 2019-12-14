import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const припадать: PerfectVerb = {
  name: Word('припадать', 6),
  singular1stPerson: Word('припадаю', 6),
  singular2ndPerson: Word('припадаешь', 6),
  singular3rdPerson: Word('припадает', 6),
  plural1stPerson: Word('припадаем', 6),
  plural2ndPerson: Word('припадаете', 6),
  plural3rdPerson: Word('припадают', 6),
  masculinePast: Word('припадал', 6),
  femininePast: Word('припадала', 6),
  neuterPast: Word('припадало', 6),
  pluralPast: Word('припадали', 6),
  imperativeInformal: Word('припадай', 6),
  imperativeFormal: Word('припадайте', 6),
  imperfect: [],
};

perfectVerbs.set(припадать.name.text, припадать);

export { припадать };