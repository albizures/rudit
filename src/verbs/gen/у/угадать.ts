import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const угадать: PerfectVerb = {
  name: Word('угадать', 4),
  singular1stPerson: Word('угадаю', 4),
  singular2ndPerson: Word('угадаешь', 4),
  singular3rdPerson: Word('угадает', 4),
  plural1stPerson: Word('угадаем', 4),
  plural2ndPerson: Word('угадаете', 4),
  plural3rdPerson: Word('угадают', 4),
  masculinePast: Word('угадал', 4),
  femininePast: Word('угадала', 4),
  neuterPast: Word('угадало', 4),
  pluralPast: Word('угадали', 4),
  imperativeInformal: Word('угадай', 4),
  imperativeFormal: Word('угадайте', 4),
  imperfect: [],
};

perfectVerbs.set(угадать.name.text, угадать);

export { угадать };