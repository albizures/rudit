import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выстрадать: PerfectVerb = {
  name: Word('выстрадать', 1),
  singular1stPerson: Word('выстрадаю', 1),
  singular2ndPerson: Word('выстрадаешь', 1),
  singular3rdPerson: Word('выстрадает', 1),
  plural1stPerson: Word('выстрадаем', 1),
  plural2ndPerson: Word('выстрадаете', 1),
  plural3rdPerson: Word('выстрадают', 1),
  masculinePast: Word('выстрадал', 1),
  femininePast: Word('выстрадала', 1),
  neuterPast: Word('выстрадало', 1),
  pluralPast: Word('выстрадали', 1),
  imperativeInformal: Word('выстрадай', 1),
  imperativeFormal: Word('выстрадайте', 1),
  imperfect: [],
};

perfectVerbs.set(выстрадать.name.text, выстрадать);

export { выстрадать };