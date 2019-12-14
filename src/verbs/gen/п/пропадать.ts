import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пропадать: PerfectVerb = {
  name: Word('пропадать', 4),
  singular1stPerson: Word('пропадаю', 4),
  singular2ndPerson: Word('пропадаешь', 4),
  singular3rdPerson: Word('пропадает', 4),
  plural1stPerson: Word('пропадаем', 4),
  plural2ndPerson: Word('пропадаете', 4),
  plural3rdPerson: Word('пропадают', 4),
  masculinePast: Word('пропадал', 4),
  femininePast: Word('пропадала', 4),
  neuterPast: Word('пропадало', 4),
  pluralPast: Word('пропадали', 4),
  imperativeInformal: Word('пропадай', 4),
  imperativeFormal: Word('пропадайте', 4),
  imperfect: [],
};

perfectVerbs.set(пропадать.name.text, пропадать);

export { пропадать };